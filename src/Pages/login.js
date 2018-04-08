/**
 * Created by dandreini16 on 4/8/18.
 */
import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';


const LOGINURL = 'https://idp.rice.edu/idp/profile/cas/login';
const SERVICEURL = 'http://localhost:8080/auth';

const LoginPage = () => {
    return (
        <MuiThemeProvider>
            <div style={{display: 'flex', paddingTop: 60, paddingLeft: 100}}>
                <div style={{flexGrow: 0.3}} >
                    <h1>
                        Login
                    </h1>
                    <RaisedButton primary={true} linkButton={true}
                                  href={LOGINURL + "?service=" + SERVICEURL} >
                        Login
                    </RaisedButton>
                </div>


            </div>
        </MuiThemeProvider>
    )
}

export default LoginPage
