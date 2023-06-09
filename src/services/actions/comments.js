import { checkReponse, apiUrl } from "../../utils/variables";
import axios from 'axios';

export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_FAILED = 'GET_COMMENTS_FAILED'

export const getComments = (id) => dispatch => {
    dispatch({ type: GET_COMMENTS_REQUEST });
    axios.get(`${apiUrl}/comments?postId=${id}`)
    .then(res => checkReponse(res))
    .then(res => 
        dispatch({
            type: GET_COMMENTS_SUCCESS,
            payload: res.data
        }))
    .catch(error => {
        console.log(error)
        dispatch({
            type: GET_COMMENTS_FAILED,
            payload: error
        })
    });
}