/**
 * Created by Will & Josh on 10/22/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
//Material Imports
import {GridList, GridTile} from 'material-ui/GridList'
import Subheader from 'material-ui/Subheader'
import CalendarDay from './calendar-day'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridlist: {
    margin: 10,
    height: 500
  },
  times: {
    marginTop: 48,
    width: 88
  }
}

const HourCount = () => {
    var hours = [];
    for (var i = 6; i < 24; i++) {
        hours.push(i);
    }
    return hours
}


const EmployeeCalendar = ({mon, tues, wed, thurs, fri, sat, sun, user}) => {
  return (
    <div style={styles.root}>

      <GridList
        cols={8}
        padding={-2}
        style={styles.gridlist}
        cellHeight={730}
        >
        <GridTile style={{marginTop: '-35px', height: 760}}>
          <GridList
            cols={1}
            cellHeight={38}
            padding={0}
            style={styles.times}>
            {HourCount().map(
              (hour) => (
                <GridTile>
                  <Subheader style={{display: 'flex', justifyContent: 'flex-end'}}>{((hour)%12==0 ? (12):((hour)%12)).toString() + ":55" + ((hour) > 11 ? (" PM"):(" AM"))}</Subheader>
                </GridTile>
              )
            )}
            <GridTile>
              <Subheader style={{display: 'flex', justifyContent: 'flex-end', marginTop: -9}}>Close</Subheader>
            </GridTile>
          </GridList>
        </GridTile>
        <GridTile>
            <CalendarDay dayname={"U"} day={sun} user={user}/>
        </GridTile>
        <GridTile>
            <CalendarDay dayname={"M"} day={mon} user={user}/>
        </GridTile>
        <GridTile>
            <CalendarDay dayname={"T"} day={tues} user={user}/>
        </GridTile>
        <GridTile>
            <CalendarDay dayname={"W"} day={wed} user={user}/>
        </GridTile>
        <GridTile>
            <CalendarDay dayname={"R"} day={thurs} user={user}/>
        </GridTile>
        <GridTile>
            <CalendarDay dayname={"F"} day={fri} user={user}/>
        </GridTile>
        <GridTile>
            <CalendarDay dayname={"S"} day={sat} user={user}/>
        </GridTile>

      </GridList>
    </div>
  )
}

export default connect (
    (state) => {
        return {
          // schedules
          mon: state.eCal.scheduleReducer.schedule.M,
          tues: state.eCal.scheduleReducer.schedule.T,
          wed: state.eCal.scheduleReducer.schedule.W,
          thurs: state.eCal.scheduleReducer.schedule.R,
          fri: state.eCal.scheduleReducer.schedule.F,
          sat: state.eCal.scheduleReducer.schedule.S,
          sun: state.eCal.scheduleReducer.schedule.U,
          // user
          user: state.eCal.activeReducer.user
        }
    }
)(EmployeeCalendar)
