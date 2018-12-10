import { POST_ADD, POST_DELETE } from '../constants/actions';

const initialState = {
    posts: [
        {
            title: "Post 1",
            body: "Post one body"
        },
        {
            title: "Post 2",
            body: "Post two body"
        },
    ]
}

export const rootReducer = (state = initialState, action) => { // action: {type: "...", payload: {...}}
    
    switch(action.type) {
        case POST_ADD:
            return {...state, posts: [...state.posts, action.payload]};
        case POST_DELETE:
            return {...state, posts: state.posts.filter(x => x.title !== action.payload.title)};
        default:
            return state;
    }
}
