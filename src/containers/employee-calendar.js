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
    marginTop: 10,
    width: 88
  }
}

const monday =
  {"shifts": [
    {
      "hour": 1,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 2,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 3,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 4,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 5,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 6,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 7,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 8,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 9,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 10,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 11,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 12,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 13,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 14,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 15,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 16,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 17,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 18,
      "availability": [],
      "schedule": []
    }
  ]}

const EmployeeCalendar = ({mon, tues, wed, thurs, fri, sat, sun}) => {
  return (
    <div style={styles.root}>

      <GridList
        cols={8}
        padding={-2}
        style={styles.gridlist}
        cellHeight={730}
        >
        <GridTile style={{marginTop: '-25px', height: 730}}>
          <GridList
            cols={1}
            cellHeight={38}
            padding={0}
            style={styles.times}>
            {monday.shifts.map(
              (shift) => (
                <GridTile>
                  <Subheader style={{display: 'flex', justifyContent: 'flex-end'}}>{((shift.hour + 5)%12==0 ? (12):((shift.hour+5)%12)).toString() + ":55" + ((shift.hour + 5) > 11 ? (" PM"):(" AM"))}</Subheader>
                </GridTile>
              )
            )}
            <GridTile>
              <Subheader style={{display: 'flex', justifyContent: 'flex-end', marginTop: -9}}>Close</Subheader>
            </GridTile>
          </GridList>
        </GridTile>
        <GridTile>
          <CalendarDay dayname={"Sunday"} day={sun}/>
        </GridTile>
        <GridTile>
          <CalendarDay dayname={"Monday"} day={mon}/>
        </GridTile>
        <GridTile>
          <CalendarDay dayname={"Tuesday"} day={tues}/>
        </GridTile>
        <GridTile>
          <CalendarDay dayname={"Wednesday"} day={wed}/>
        </GridTile>
        <GridTile>
          <CalendarDay dayname={"Thursday"} day={thurs}/>
        </GridTile>
        <GridTile>
          <CalendarDay dayname={"Friday"} day={fri}/>
        </GridTile>
        <GridTile>
          <CalendarDay dayname={"Saturday"} day={sat}/>
        </GridTile>

      </GridList>
    </div>
  )
}

//Removed content
// <Subheader style={{display: 'flex', justifyContent: 'flex-end'}}>{((shift.hour == 7 ? (12) : ((shift.hour + 5)%12)).toString() + ":55"}</Subheader>

export default connect (
    (state) => {
        return {
          mon: state.monReducer.mon,
          tues: state.tuesReducer.tues,
          wed: state.wedReducer.wed,
          thurs: state.thursReducer.thurs,
          fri: state.friReducer.fri,
          sat: state.satReducer.sat,
          sun: state.sunReducer.sun
        }
    }
)(EmployeeCalendar)
