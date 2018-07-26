import React, { Component } from 'react'
import { connect } from 'react-redux';
// Components
import MasterDay from './masterDay';
// Actions
import { initializeMasterSchedule } from '../../actions/masterActions';
// GraphQL
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';

// SASS
import '../../css/memberPage.scss';

class MasterCalendar extends Component {
    constructor() {
        super();
    }

    // Necessary lifecycle method
    componentDidMount() {
        const { initializeMasterSchedule } = this.props;
        initializeMasterSchedule();
    }

    render() {
        var { schedule } = this.props;
        var week = schedule.week;
        return (
            <div className="master-calendar">
                {week && week.map((day) => {
                    return (
                        <MasterDay
                        className="master-day"
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