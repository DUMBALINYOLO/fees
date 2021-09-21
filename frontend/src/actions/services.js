import axios from 'axios';
import {
    GET_SERVICES,
    GET_SERVICE,
    ADD_SERVICE,
} from '../types/serviceTypes';
import {
    servicesURL
} from '../constants';
import { returnErrors } from './messages';

// Get
export const getServices = () => dispatch => {
    axios.get(servicesURL)
        .then(res => {
            dispatch({
                type: GET_SERVICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//get
export const getService = id => dispatch =>{
      axios.get(`${servicesURL}${id}/`)
        .then(res => {
            dispatch({
                type: GET_SERVICE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const addService = (service) => dispatch => {

    axios.post(servicesURL, service)
        .then(res => {
            dispatch({
                type: ADD_SERVICE,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}
