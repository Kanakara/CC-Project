import { combineReducers } from 'redux';
// import registerReducer from './registerReducer';
import submitReducer from './submitReducer'

// export default combineReducers({
//     register: registerReducer
// });

export default combineReducers({
    submit: submitReducer

});
   
