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
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
    }
}

const CalendarDay = ({dayname, day, totals}) => {
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
                    <CalendarHour key={day[shift].hour.toString()} dayname={dayname} hour={day[shift]} total={totals[day[shift].hour - 7]}/>
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
