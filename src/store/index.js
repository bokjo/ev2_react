import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from '../reducers/rootReducer';
import thunk from "redux-thunk";

const initialState = {
    postsIsLoading: false,
    postsHasFailed: false,
  posts: [
    {
      title: "Post title 1",
      body: "Body blah blah blah..."
    },
    {
      title: "Some title 1",
      body: "Extra extra read all about it..."
    }
  ]
};


const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
