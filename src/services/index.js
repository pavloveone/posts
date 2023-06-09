import { combineReducers } from 'redux';
import { postsReducer } from './reducers/posts';
import { commentsReducer } from './reducers/comments';
import { userReducer } from './reducers/user';
import { usersPostsReducer } from './reducers/users-posts';

export const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    user: userReducer,
    usersPosts: usersPostsReducer
});