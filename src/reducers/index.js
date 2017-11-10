import {combineReducers} from 'redux';

import posts from './Posts.js';
import post from './Post.js';

export default combineReducers({
    posts,
    post
});
