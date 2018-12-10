import { POST_ADD } from '../constants/actions';
import { POST_DELETE } from '../constants/actions';

export const PostAdd = (data) => {
    return {
        type: POST_ADD,
        payload: data
    }
}

export const PostDelete = (data) => {
    return {
        type: POST_DELETE,
        payload: data
    }
}