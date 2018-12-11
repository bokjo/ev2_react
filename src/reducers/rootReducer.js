import { POST_ADD, POST_DELETE, POSTS_SUCESS, POSTS_FAIL, POSTS_LOADING } from '../constants/actions';

export const rootReducer = (state, action) => { // action: {type: "...", payload: {...}}
    switch(action.type) {
      case POST_ADD:
        return {...state, posts: [...state.posts, action.payload]}
      case POST_DELETE: 
        return {...state, posts: state.posts.filter((p, i) => i !== action.payload)}
      case POSTS_SUCESS:
        return {...state, posts: action.payload, postsIsLoading: false, postsHasFailed: false};
      case POSTS_FAIL:
        return {...state, postsHasFailed: action.payload};
      case POSTS_LOADING:
        return {...state, postsIsLoading: action.payload}; 
      default: 
        return state;
    }
}
