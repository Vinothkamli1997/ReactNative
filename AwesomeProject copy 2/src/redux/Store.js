import userReducer from './Reducers';

const {createStore} = require('redux');

const store = createStore(userReducer);

export default store;
