/**
 * Created by Jeffr on 8/3/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import style from '../../css/calendar.css'



const Hour_shifts = ({week_day}) => {

    return (
        <div>
            <div className={style.box+' '+style.one}>{week_day[1]}</div>
            <div className={style.box+' '+style.two}>{week_day[2]}</div>
            <div className={style.box+' '+style.three}>{week_day[3]}</div>
            <div className={style.box+' '+style.four}>{week_day[4]}</div>
            <div className={style.box+' '+style.five}>{week_day[5]}</div>
            <div className={style.box+' '+style.six}>{week_day[6]}</div>
            <div className={style.box+' '+style.seven}>{week_day[7]}</div>
            <div className={style.box+' '+style.eight}>{week_day[8]}</div>
            <div className={style.box+' '+style.nine}>{week_day[9]}</div>
        </div>
    )
}

const Calender = ({mon, tues, wed, thurs, fri, sat, sun}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.cols+' '+style.hours}>
                Shifts
                <div className={style.shift}>
                    <div>
                        <blockquote>9am-10am</blockquote>
                    </div>
                </div>
                <div className={style.shift}>
                    <div>
                        <blockquote>10am-11am</blockquote>
                    </div>
                </div>
                <div className={style.shift}>
                    <div>
                        <blockquote>11am-12pm</blockquote>
                    </div>
                </div>
                <div className={style.shift}>
                    <div>
                        <blockquote>12pm-1pm</blockquote>
                    </div>
                </div>
                <div className={style.shift}>
                    <div>
                        <blockquote>1pm-2pm</blockquote>
                    </div>
                </div>
                <div className={style.shift}>
                    <div>
                        <blockquote>2pm-3pm</blockquote>
                    </div>
                </div>
                <div className={style.shift}>
                    <div>
                        <blockquote>3pm-4pm</blockquote>
                    </div>
                </div>
                <div className={style.shift}>
                    <div>
                        <blockquote>4pm-5pm</blockquote>
                    </div>
                </div>
                <div className={style.shift}>
                    <div>
                        <blockquote>5pm-6pm</blockquote>
                    </div>
                </div>
            </div>
            <div className={style.cols+' '+style.monday}>
                Monday
                <Hour_shifts week_day={mon} />
            </div>
            <div className={style.cols+' '+style.tuesday}>
                Tuesday
                <Hour_shifts week_day={tues} />
            </div>
            <div className={style.cols+' '+style.wednesday}>
                Wednesday
                <Hour_shifts week_day={wed} />
            </div>
            <div className={style.cols+' '+style.thursday}>
                Thursday
                <Hour_shifts week_day={thurs} />
            </div>
            <div className={style.cols+' '+style.friday}>
                Friday
                <Hour_shifts week_day={fri} />
            </div>
            <div className={style.cols+' '+style.saturday}>
                Saturday
                <Hour_shifts week_day={sat} />
            </div>
            <div className={style.cols+' '+style.sunday}>
                Sunday
                <Hour_shifts week_day={sun} />
            </div>
        </div>
    )
}

export default connect (
    (state) => {
        return {
            // netids : state.userReducer.netids,
            // mon: state.eCal.monReducer.mon,
            // tues: state.eCal.tuesReducer.tues,
            // wed: state.eCal.wedReducer.wed,
            // thurs: state.eCal.thursReducer.thurs,
            // fri: state.eCal.friReducer.fri,
            // sat: state.eCal.satReducer.sat,
            // sun: state.eCal.sunReducer.sun,
            mon: state.eCal.scheduleReducer.M,
            tues: state.eCal.scheduleReducer.T,
            wed: state.eCal.scheduleReducer.W,
            thurs: state.eCal.scheduleReducer.R,
            fri: state.eCal.scheduleReducer.F,
            sat: state.eCal.scheduleReducer.S,
            sun: state.eCal.scheduleReducer.U,
        }
    }
)(Calender)


