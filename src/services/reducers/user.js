import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILED } from '../actions/user';

const initialState = {
    isLoading: false,
    hasError: false,
    user: null
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_REQUEST:
         return {
                ...state,
                isLoading: true,
         }
        case GET_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload
            }
        case GET_USER_FAILED:
            return {
                ...state,
                hasError: true,
                user: null
            }
        default: return state
    }
}