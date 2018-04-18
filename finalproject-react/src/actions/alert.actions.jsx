import { alertConstants } from '../constant';

export const alertActions = { 
    success,
    error,
    clear
};
function success(messege) {
    return { type: alertConstants.SUCCESS, messege };
}
function error(messege) {
    return { type: alertConstants.ERROR, messege };
}
function clear() {
    return { type: alertConstants.CLEAR, messege };
}