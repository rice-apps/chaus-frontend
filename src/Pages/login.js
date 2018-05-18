/**
 * Created by Will Mundy, Danny Andreini on 4/8/18.
 */
import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';
import {get_users} from '../actions/userActions'

const LOGINURL = 'https://idp.rice.edu/idp/profile/cas/login';
const SERVICEURL = 'http://localhost:8080/auth';

const divStyle = {
  backgroundColor: '#5e6c8a', // light blue material-ui
  display: 'flex',
  justifyContent: 'center',
  height: '100vh'
}

const buttonStyle = {
  // backgroundColor: '#64B5F6', // light blue material-ui
  display: 'flex',
  justifyContent: 'center',
  height: '30px',
  marginTop: '50vh',
}

const bbuttonStyle = {
  // backgroundColor: '#64B5F6', // light blue material-ui
  display: 'flex',
  justifyContent: 'center',
  height: '40px',
}

const overlayStyle = {
  height: '40px'
}

const labelStyle = {
  fontFamily: 'Raleway',
  fontSize: 25,
  marginTop: '5px',
  color: 'white'
}

const logoStyle = {
  position: 'fixed',
  marginTop: '30vh',
  marginLeft: '52vh',
  left: 25,
}

const teamStyle = {
  position: 'fixed',
  fontSize: 30,
  fontFamily: 'Raleway',
  fontWeight: 'lighter',
  marginTop: '70vh',
  marginLeft: '-37vw',
  color: 'white'
}

const teamHeadStyle = {
  position: 'fixed',
  fontSize: 26,
  marginTop: '78vh',
  marginLeft: '26vw',
  // color: '#BDBDBD',
  color: '#B0BEC5',
  fontFamily: 'Raleway'
}

const chausStyle = {
  position: 'fixed',
  marginTop: '77vh',
  marginLeft: '35vw',
}

const LoginPage = () => {
    

    return (
        <MuiThemeProvider>
          <div style={divStyle}>
            <div>
              <a href={'http://coffeehouse.rice.edu/'} target={'_blank'} style={logoStyle}>
                  <img src={"http://coffeehouse.blogs.rice.edu/files/2017/07/Website-header-logo-utp0mt.png"} height={120} />
              </a>
            </div>
            <div>
              <RaisedButton
                style={buttonStyle}
                buttonStyle={bbuttonStyle}
                overlayStyle={overlayStyle}
                primary
                linkButton
                href={LOGINURL + "?service=" + SERVICEURL}
                backgroundColor={"#64B5F6"}>
                <h1 style={labelStyle}>Login</h1>
              </RaisedButton>
            </div>
            <div style={{display: "inline-block"}}>
              <h3 style={teamHeadStyle}>Powered By: </h3>
              <a href={'https://www.riceapps.org'} target={'_blank'} style={chausStyle}>
                  <img src={"https://riceapps.org/assets/logos/logo-light-nowords.svg"} height={63} />
              </a>
            </div>
          </div>
        </MuiThemeProvider>
    )
}

/*
<h2 style={teamHeadStyle}>Team</h2>
<h3 style={teamStyle}>Jeffrey Wang, Danny Andreini, Will Mundy, Josh Dunning, Jamie Tan, Oeishi Banerjee</h3>

*/

export default LoginPage
