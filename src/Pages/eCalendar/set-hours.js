/**
 * Created by Will on 6/2/2018
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const setHoursStyle = {

}

class SetHours extends React.Component {
    constructor(props) {
        super(props)
        console.log(props.netid)
        this.state = {
            netid: props.netid,
            idealHours: "",
            maxHours: "",
            disableSubmit: true
        }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.netid != undefined) {
            this.setState({ netid: nextProps.netid, disableSubmit: false })
        }
    }

    handleSubmit() {
        let stateCopy = {...this.state}
        let { idealHours, maxHours, netid } = stateCopy;
        // If idealHours and/or maxHours are inputted, then save those to DB on submission
        if (idealHours) {
            console.log(netid)
            this.props.setIdealHours(netid, idealHours, 'ideal')
        }
        if (maxHours) {
            this.props.setMaxHours(netid, maxHours, 'max')
        }
        // Clear state
        this.setState({idealHours: "", maxHours: ""})
    }

    render() {
        return (
            <div style={setHoursStyle}>
                <TextField
                floatingLabelText={"Ideal Hours: "+this.state.idealHours}
                onChange={(e, val) => this.setState({idealHours: val})}
                value={this.state.idealHours}
                />
                <br />
                <TextField
                floatingLabelText={"Max Hours: "+this.state.maxHours}
                onChange={(e, val) => this.setState({maxHours: val})}
                value={this.state.maxHours}
                />
                <br />
                <RaisedButton
                label="Submit"
                onClick={this.handleSubmit.bind(this)}
                disabled={this.state.disableSubmit || (this.state.idealHours == "" && this.state.maxHours == "")}
                />
            </div>
        )
    }
}

export default SetHours;