import {
    ADD_SERVICE,
    GET_SERVICE,
    GET_SERVICES
} from '../types/serviceTypes';

const initialState = {
    services: [],
    service: {},
}

export default function services(state = initialState, action){
    switch(action.type){

        case GET_SERVICES:
            return {
                ...state,
                services: action.payload
            };
        case GET_SERVICE:
            return {
                ...state,
                service: action.payload
            };
        case ADD_SERVICE:
            return {
                ...state,
                service: [...state.services, action.payload]
            };
        default:
            return state;
    }
}
