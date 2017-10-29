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

const EmployeeCalendar = () => {
  return (
    <div style={styles.root}>
      <GridList
        cols={8}
        style={styles.gridlist}
        cellHeight={630}
        >
        <GridTile style={{marginTop: '-25px', height: 700}}>
          <GridList
            cols={1}
            cellHeight={30}
            style={styles.times}>
            {monday.shifts.map(
              (shift) => (
                <GridTile>
                  <Subheader style={{display: 'flex', justifyContent: 'flex-end'}}>{((shift.hour + 5)%12==0 ? (12):((shift.hour+5)%12)).toString() + ":55" + ((shift.hour + 5) > 11 ? (" PM"):(" AM"))}</Subheader>
                </GridTile>
              )
            )}
            <GridTile>
              <Subheader style={{display: 'flex', justifyContent: 'flex-end'}}>Close</Subheader>
            </GridTile>
          </GridList>
        </GridTile>
        <GridTile>
          <CalendarDay/>
        </GridTile>
        <GridTile>
          <CalendarDay/>
        </GridTile>
        <GridTile>
          <CalendarDay/>
        </GridTile>
        <GridTile>
          <CalendarDay/>
        </GridTile>
        <GridTile>
          <CalendarDay/>
        </GridTile>
        <GridTile>
          <CalendarDay/>
        </GridTile>
        <GridTile>
          <CalendarDay/>
        </GridTile>
      </GridList>
    </div>
  )
}

//Removed content
// <Subheader style={{display: 'flex', justifyContent: 'flex-end'}}>{((shift.hour == 7 ? (12) : ((shift.hour + 5)%12)).toString() + ":55"}</Subheader>

export default connect (
    (state) => {
        return {}
    }
)(EmployeeCalendar)
