import {POST_ADD, POST_DELETE, POSTS_SUCESS, POSTS_LOADING, POSTS_FAIL} from '../constants/actions';
import { dispatch } from 'rxjs/internal/observable/range';

export const PostAdd = (data) => {
    return {
        type: POST_ADD,
        payload: data
    }
}

export const PostDelete = (id) => {
    return {
        type: POST_DELETE,
        payload: id
    }
}

const PostsLoading = () => {
    return {
        type: POSTS_LOADING,
        payload: true
    }
}

const PostsFail = () => {
    return {
        type: POSTS_FAIL,
        payload: true
    }
}

const PostsGet = (data) => {
    return {
        type: POSTS_SUCESS,
        payload: data
    }
}
export const PostsFetch = () => {
    dispatch(PostsLoading);
    fetch()
    .then((res) =>{
        return res.json
    })
    .then((data) => {
        dispatch(PostsGet(data));
    })
    .catch(() => {
        dispatch(PostsFail);
    })
}