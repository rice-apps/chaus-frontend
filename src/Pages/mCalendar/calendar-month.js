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


const CalendarMonth = ({mon, tues, wed, thurs, fri, sat, sun}) => {
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
            <CalendarDay dayname={0} day={sun}/>
        </GridTile>
        <GridTile>
            <CalendarDay dayname={1} day={mon}/>
        </GridTile>
        <GridTile>
            <CalendarDay dayname={2} day={tues}/>
        </GridTile>
        <GridTile>
            <CalendarDay dayname={3} day={wed}/>
        </GridTile>
        <GridTile>
            <CalendarDay dayname={4} day={thurs}/>
        </GridTile>
        <GridTile>
            <CalendarDay dayname={5} day={fri}/>
        </GridTile>
        <GridTile>
            <CalendarDay dayname={6} day={sat}/>
        </GridTile>

      </GridList>
    </div>
  )
}

export default connect (
    (state) => {
        return {
          mon: state.mCal.mmonReducer.mon,
          tues: state.mCal.mtuesReducer.tues,
          wed: state.mCal.mwedReducer.wed,
          thurs: state.mCal.mthursReducer.thurs,
          fri: state.mCal.mfriReducer.fri,
          sat: state.mCal.msatReducer.sat,
          sun: state.mCal.msunReducer.sun
        }
    }
)(CalendarMonth)
