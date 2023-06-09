import { checkReponse, apiUrl } from "../../utils/variables";
import axios from 'axios';

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILED = 'GET_POSTS_FAILED'

export const getPosts = () => dispatch => {
    dispatch({ type: GET_POSTS_REQUEST });
    axios.get(`${apiUrl}/posts`)
    .then(res => checkReponse(res))
    .then(res => 
        dispatch({
            type: GET_POSTS_SUCCESS,
            payload: res.data
        }))
    .catch(error => {
        console.log(error)
        dispatch({
            type: GET_POSTS_FAILED,
            payload: error
        })
    });
}