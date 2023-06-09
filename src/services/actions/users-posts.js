import { checkReponse, apiUrl } from "../../utils/variables";
import axios from 'axios';

export const GET_USERS_POSTS_REQUEST = 'GET_USERS_POSTS_REQUEST';
export const GET_USERS_POSTS_SUCCESS = 'GET_USERS_POSTS_SUCCESS';
export const GET_USERS_POSTS_FAILED = 'GET_USERS_POSTS_FAILED'

export const getUsersPosts = (userId) => dispatch => {
    dispatch({ type: GET_USERS_POSTS_REQUEST });
    axios.get(`${apiUrl}/users/${userId}/posts`)
    .then(res => checkReponse(res))
    .then(res => 
        dispatch({
            type: GET_USERS_POSTS_SUCCESS,
            payload: res
        }))
    .catch(error => {
        console.log(error)
        dispatch({
            type: GET_USERS_POSTS_FAILED,
            payload: error
        })
    });
}