/**
 * Created by dandreini16 on 10/22/17.
 */
import { resource } from './masterActions'


export const toggleMenu = (state) => {
    return (dispatch) => dispatch({
        type:"TOGGLEBURGER"
    })
}


export const changePage = (page) => {
    return (dispatch) => dispatch({
        type:"CHANGELOCATION",
        location:page
    })
}