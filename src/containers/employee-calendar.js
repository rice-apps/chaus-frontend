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


const EmployeeCalendar = ({mon, tues, wed, thurs, fri, sat, sun}) => {
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
            {/*<p>{"U"}</p>*/}
            <CalendarDay dayname={"U"} day={sun}/>
        </GridTile>
        <GridTile>
            {/*<p>{"M"}</p>*/}
            <CalendarDay dayname={"M"} day={mon}/>
        </GridTile>
        <GridTile>
            {/*<p>{"T"}</p>*/}
            <CalendarDay dayname={"T"} day={tues}/>
        </GridTile>
        <GridTile>
            {/*<p>{"W"}</p>*/}
            <CalendarDay dayname={"W"} day={wed}/>
        </GridTile>
        <GridTile>
            {/*<p>{"R"}</p>*/}
            <CalendarDay dayname={"R"} day={thurs}/>
        </GridTile>
        <GridTile>
            {/*<p>{"F"}</p>*/}
            <CalendarDay dayname={"F"} day={fri}/>
        </GridTile>
        <GridTile>
            {/*<p>{"S"}</p>*/}
            <CalendarDay dayname={"S"} day={sat}/>
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
