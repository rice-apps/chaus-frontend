/**
 * Created by Will & Josh on 11/19/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {close_modal, toggle_scheduled, save_shift} from '../../actions/masterActions'
//Material Imports
import {GridList, GridTile} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import Save from 'material-ui/svg-icons/content/save'
import {fullWhite} from 'material-ui/styles/colors';

class UserPreferenceButton extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            hover: false,
            preference: 4,
            netid: props.netid,
            users: props.users,
            userHours: props.userHours
        }
    }

    handleTooltip() {
        this.state.hover ? 
            // if true, then set to false
            this.setState({hover: false}) :
            // otherwise, set to true
            this.setState({hover: true})
    }

    getName(netid, users) {
        var person = users.find( (user) => {return user.netid == netid})
        return person.firstName + " " + person.lastName[0]
    }

    getHours(netid, userHours) {
        var { netid, userHours } = this.state
        var {ideal, max, total} = userHours[netid]
        // Returns like this: "Ideal: 5/8 Max: 5/10"
        return "Ideal: " + total + "/" + ideal + " Max: " + total + "/" + max
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            netid: nextProps.netid,
            users: nextProps.users,
            userHours: nextProps.userHours
        })
    }

    render() {
        var {netid, users, userHours, hover} = this.state
        return (
            <RaisedButton
                style={{margin: 2, width: 200}} 
                key={netid} 
                label={hover ? this.getHours() : this.getName(netid, users)} 
                labelColor={fullWhite}
                backgroundColor={this.props.getButtonColor(netid, userHours)} 
                onClick={() => this.props.toggle_scheduled(netid)} 
                // For hover effects
                onMouseEnter={() => this.handleTooltip(netid)}
                onMouseLeave={() => this.handleTooltip(netid)}
            />
        )
    }
}

export default UserPreferenceButton;