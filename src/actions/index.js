import {POST_ADD, POST_DELETE} from '../constants/actions';

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
