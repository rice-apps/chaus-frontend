import React, { Component } from 'react'
import { connect } from 'react-redux';
// Components
import MasterDay from './masterDay';
import ScheduleTimes from '../../components/ScheduleTimes';
// Actions
import { initializeMasterSchedule } from '../../actions/masterActions';
// GraphQL
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';

class MasterCalendar extends Component {
    constructor(props) {
        super(props);
        const { initializeMasterSchedule } = props;
        initializeMasterSchedule();
    }

    render() {
        var { schedule } = this.props;
        var week = schedule.week;
        return (
            <div className="calendar-week">
                {week && (<ScheduleTimes />)}
                {week && week.map((day) => {
                    return (
                        <MasterDay
                        className="calendar-day"
                        dayName={day.dayName}
                        shifts={day.shifts} 
                        key={day.dayName}
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
            schedule: state.mCal.newScheduleReducer.schedule
        }
    },
    (dispatch) => {
        return {
            initializeMasterSchedule: () => dispatch(initializeMasterSchedule())
        }
    }
)(MasterCalendar);