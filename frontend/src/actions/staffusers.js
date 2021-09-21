import axios from 'axios';
import {
    GET_STAFF_USERS,
    GET_STAFF_USER,
    ADD_STAFF_USER

} from '../types/staffTypes';
import { 
    staffusersURL

} from '../constants';


export const getStaffUsers = () => dispatch => {
    axios.get(staffusersURL)
        .then(res => {
            dispatch({
                type: GET_STAFF_USERS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


// Add
export const addStaffUser = (blog) => dispatch => {
    const headers ={
        "Content-Type": "multipart/form-data",
        'Accept': 'multipart/form-data',
    };
    axios.post(staffusersURL, blog, headers)
        .then(res => {
            dispatch({
                type: ADD_STAFF_USER,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//get
export const getStaffUser = id => dispatch =>{
      axios.get(`${staffusersURL}${id}/`)
        .then(res => {
            dispatch({
                type: GET_STAFF_USER,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

