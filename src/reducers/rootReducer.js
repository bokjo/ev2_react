import { POST_ADD, POST_DELETE } from '../constants/actions';

const initialState = {
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

export const rootReducer = (state = initialState, action) => { // action: {type: "...", payload: {...}}
    switch(action.type) {
      case POST_ADD:
        return {...state, posts: [...state.posts, action.payload]}
      case POST_DELETE: 
        return {...state, posts: state.posts.filter((p, i) => i !== action.payload)}
      default: 
        return state;
    }
}
