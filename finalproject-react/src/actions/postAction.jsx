import { FETCH_POST, NEW_POST } from './types';
    // fetch to be determined
export const fetchPost = () => dispatch => {
        fetch()
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSt,
            payload: posts
    }))
}