import { checkReponse, apiUrl } from "../../utils/variables";
import axios from 'axios';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED'

export const getUser = (userId) => dispatch => {
    dispatch({ type: GET_USER_REQUEST });
    axios.get(`${apiUrl}/users/${userId}`)
    .then(res => checkReponse(res))
    .then(res => 
        dispatch({
            type: GET_USER_SUCCESS,
            payload: res
        }))
    .catch(error => {
        console.log(error)
        dispatch({
            type: GET_USER_FAILED,
            payload: error
        })
    });
}