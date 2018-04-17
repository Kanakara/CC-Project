import {FETCH_SUBMIT, NEW_SUBMIT} from '../actions/types';

const initialState = {
    items: [],
    item: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_SUBMIT:
        return {
            ...state,
            items: action.payload
        };
        case NEW_SUBMIT:
        return {
            ...state,
            item: action.payload
        };
       default:
    return state;
    }
}