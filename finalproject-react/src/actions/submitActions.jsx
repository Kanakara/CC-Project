import { FETCH_SUBMIT, NEW_SUBMIT } from './types';

export const fetchSubmit = () => dispatch => {
    fetch("http://locolhost:5000/API/ContactUs")
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: FETCH_SUBMIT,
                payload: data
            })
        );
};

export const newSubmit = dispatch => {
    fetch('http://locolhost:5000/API/ContactUs', {
        method: 'Submit',
        headers: {
            'content-type': 'appliction/json'
        },
        body: JSON.stringify(submitData)
    })
    .then(res => res.json)
    .then(submit =>
        dispatch({
            type: NEW_SUBMIT,
            payload: submit
        })
    )
}