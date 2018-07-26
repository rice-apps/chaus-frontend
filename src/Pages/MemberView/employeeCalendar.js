import React, { Component } from 'react'
import { connect } from 'react-redux';
// Components
import EmployeeDay from './employeeDay';
import ScheduleTimes from '../../components/ScheduleTimes';
// Actions
import { initializeCalendar } from '../../actions/employeeActions';

// SASS
import '../../css/memberPage.scss';

class EmployeeCalendar extends Component {
    constructor(props) {
        super(props);
        // Initialize Calendar
        const { initializeCalendar, activeUser } = props;
        initializeCalendar(activeUser.netid);
    }

    render() {
        var { schedule } = this.props;
        var week = schedule.week;
        return (
            <div className="employee-calendar">
                {week && (<ScheduleTimes />)}
                {week && Object.keys(week).map((dayName) => {
                    var day = week[dayName];
                    return (
                        <EmployeeDay
                            dayName={dayName}
                            shifts={day.shifts}
                            key={dayName}
                        />
                    )
                })}
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            schedule: state.eCal.newScheduleReducer.schedule,
            activeUser: state.eCal.newScheduleReducer.activeUser
        }
    },
    (dispatch) => {
        return {
            initializeCalendar: (netid) => dispatch(initializeCalendar(netid))
        }
    }
)(EmployeeCalendar);