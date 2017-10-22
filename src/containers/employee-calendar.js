/**
 * Created by Will & Josh on 10/22/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
//Material Imports
import {GridList, GridTile} from 'material-ui/GridList'
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
  }
}

const EmployeeCalendar = () => {
  return (
    <div style={styles.root}>
      <GridList
        cols={7}
        style={styles.gridlist}
        cellHeight={1000}
        >
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

export default connect (
    (state) => {
        return {}
    }
)(EmployeeCalendar)
