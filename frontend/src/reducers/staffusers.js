import {
    GET_STAFF_USERS,
    GET_STAFF_USER,
    ADD_STAFF_USER
    } from '../types/staffTypes';

const initialState = {
    staffusers: [],
    staffuser: {},

}

export default function blogs(state = initialState, action){
    switch(action.type){

        case GET_STAFF_USERS:
            return {
                ...state,
                staffusers: action.payload
            };

        case ADD_STAFF_USER:
            return {
                ...state,
                staffuser: [...state.staffusers, action.payload]
            };
        case GET_STAFF_USER:
            return {
                ...state,
                staffuser: action.payload
            };
  
        default:
            return state;
    }
}