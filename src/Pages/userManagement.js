/**
 * Created by Will
 */
import React, {Component} from 'react'
// Component Imports
import Sidebar from './sidebar.js'
// Apollo Imports
// import { graphql } from 'react-apollo'
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag'
// Material Imports
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from 'material-ui/TextField';

/*
  Inputs:
    - usersQuery: the object of the graphql query
      - usersQuery.loading / usersQuery.error
      - usersQuery.users: list of user objects which contains netid, firstName,
      lastName, minHour, maxHour
*/
// class UserManagement extends Component {
//
//
//   render() {
//     let usersQuery = this.props.usersQuery;
//     if (usersQuery && usersQuery.loading) {
//       return (<div>Loading...</div>);
//     }
//     if (usersQuery && usersQuery.error) {
//       return (<div>Error. Please try again.</div>);
//     }
//     const users = usersQuery.users;
//     console.log(usersQuery);
//     return (
//       <div style={styles.root}>
//         <Grid container spacing={24}>
//           <Grid item xs={6}>
//             <h1>Add User</h1>
//           </Grid>
//           <Grid item xs={6}>
//             <h1>Remove User</h1>
//             <List>
//               {users.map((user) => (
//                 <ListItem
//                   key={user.id}
//                   dense>
//                   <ListItemText primary={`${user.firstName} ${user.lastName}`} />
//                   <ListItemSecondaryAction>
//                     <IconButton aria-label="delete">
//                       <DeleteIcon />
//                     </IconButton>
//                   </ListItemSecondaryAction>
//                 </ListItem>
//               ))}
//             </List>
//           </Grid>
//         </Grid>
//       </div>
//   }
// }

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      netidValue: ""
    }
  }

  handleChange(e) {
    let value = e.target.value;
    this.setState({ netidValue: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createUser({
      variables: {
        netid: this.state.netidValue,
      },
      optimisticResponse: {
        __typename: "Mutation",
        createUser: {
          id: Math.round(Math.random() * -1000000),
          netid: this.state.netidValue,
          __typename: "User"
        }
      }
    });
    this.setState({ netidValue: "" });
  }

  render() {
    return (
      <form autoComplete="off"
            onSubmit={this.handleSubmit.bind(this)}>
        <TextField
          id="name"
          label="NetID"
          value={this.state.netidValue}
          onChange={this.handleChange.bind(this)}
        />
      </form>
    )
  }
}

const UserManagement = () => {
  return (
    <Query query={getUsers}>
      {({loading, error, data}) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error: try again...</p>
        return (
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <h1>Add User</h1>
              <Mutation
                mutation={createUser}
                update={(cache, { data: { createUser } }) => {
                  const { users } = cache.readQuery({query: getUsers});
                  users.push(createUser);
                  console.log(users);
                  cache.writeQuery({
                    query: getUsers,
                    data: { users: users }
                  })
                }}>
                {createUser => (
                  <CreateUser createUser={createUser} />
                )}
              </Mutation>
            </Grid>
            <Grid item xs={6}>
              <h1>Remove User</h1>
              <List>
                {data.users.map(({id, netid}) =>
                  (
                    <Mutation
                      mutation={deleteUser}
                      update={(cache, { data: { deleteUser } }) => {
                        const { users } = cache.readQuery({query: getUsers});
                        const deletedUserIndex = users.findIndex(user => user.id == deleteUser.id);
                        users.splice(deletedUserIndex, 1);
                        cache.writeQuery({
                          query: getUsers,
                          data: { users: users }
                        });
                      }}>
                      {deleteUser => (
                        <ListItem
                          key={netid}>
                          <ListItemText primary={`${netid}`} />
                          <ListItemSecondaryAction
                            onClick={() => {
                              deleteUser({
                                variables: {
                                  id,
                                  netid
                                },
                                optimisticResponse: {
                                  __typename: "Mutation",
                                  deleteUser: {
                                    id,
                                    __typename: "User"
                                  }
                                }
                              })
                            }}>
                            <IconButton aria-label="delete">
                              <DeleteIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                      )}
                    </Mutation>
                    )
                  )}
                </List>
            </Grid>
          </Grid>
        )
      }}
    </Query>
  )
}

// const UserManagement = ({ usersQuery, deleteUserMutation }) => {
//   if (usersQuery && usersQuery.loading) {
//     return (<div>Loading...</div>);
//   }
//   if (usersQuery && usersQuery.error) {
//     return (<div>Error. Please try again.</div>);
//   }
//   const users = usersQuery.users;
//   console.log(users);
//   return (
//     <div>
//       <Grid container spacing={24}>
//         <Grid item xs={6}>
//           <h1>Add User</h1>
//         </Grid>
//         <Grid item xs={6}>
//           <h1>Remove User</h1>
//           <List>
//             {users.map((user) => {
//               return (
//                 <ListItem
//                   key={user.id}>
//                   <ListItemText primary={`${user.netid}`} />
//                   <ListItemSecondaryAction
//                     onClick={() => {
//                       deleteUserMutation({
//                         variables: {
//                           netid: user.netid
//                         }
//                       }).then(
//                         usersQuery()
//                       )
//                     }}>
//                     <IconButton aria-label="delete">
//                       <DeleteIcon />
//                     </IconButton>
//                   </ListItemSecondaryAction>
//                 </ListItem>
//               )
//             })}
//           </List>
//         </Grid>
//       </Grid>
//     </div>
//   )
// }

const getUsers = gql`
  query UsersQuery {
    users {
      id
      netid
    }
  }
`

const deleteUser = gql`
  mutation DeleteUserMutation($netid: String!) {
    deleteUser(netid: $netid){
      id
    }
  }
`

const createUser = gql`
  mutation CreateUserMutation($netid: String!) {
    createUser(netid: $netid){
      id
      netid
    }
  }
`

export default UserManagement;

// export default compose(
//   graphql(getUsers, { name: 'usersQuery' }),
//   graphql(deleteUser, { name: 'deleteUserMutation' }),
// )(UserManagement);
