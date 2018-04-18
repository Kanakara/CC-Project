import {FETCH_SUBMIT, NEW_SUBMIT} from './types';

export const fetchSubmit = () => dispatch =>{
    ;

{
    // submitHandler() {
        fetch("http://localhost:5000/api/ContactUs/")
        .then(res => res.json())
        .then(submit => 
            dispatch({
            type: FETCH_SUBMIT,
            payload: submit
        })
    );
}};
