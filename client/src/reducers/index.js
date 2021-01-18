import { combineReducers } from 'redux';

import posts from './posts';

//destructuring {posts: posts}
export const reducers = combineReducers({ posts });