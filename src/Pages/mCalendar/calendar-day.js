/**
 * Created by Will & Josh on 10/22/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
//Material Imports
import {GridList, GridTile} from 'material-ui/GridList'
import Subheader from 'material-ui/Subheader'
//Inner Imports
import CalendarHour from './calendar-hour'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridlist: {
    width: 96
  }
}

const DayTitle = (dayname) => {
    switch(dayname) {
        case "U":
            return "Sunday"
        case "M":
            return "Monday"
        case "T":
            return "Tuesday"
        case "W":
            return "Wednesday"
        case "R":
            return "Thursday"
        case "F":
            return "Friday"
        case "S":
            return "Saturday"
    }
}

const CalendarDay = ({dayname, day}) => {
  return (
    <div style={styles.root}>
      <GridList
        cellHeight={38}
        padding={0}
        style={styles.gridlist}
        cols={1}>
          <GridTile>
              <Subheader style={{padding: 2, display: 'flex'}}>{DayTitle(dayname)}</Subheader>
          </GridTile>
        {Object.keys(day).map(

          (shift) => {
          return (
              <GridTile key={day[shift].hour.toString()}>
                    <CalendarHour key={day[shift].hour.toString()} dayname={dayname} hour={day[shift]} />
              </GridTile>
          )
        }
        )}
      </GridList>
    </div>
  )
}

export default connect (
    (state) => {
        return {
        }
    }
)(CalendarDay)
