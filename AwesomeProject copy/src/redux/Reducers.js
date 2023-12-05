const {USERID} = require('./Action');

const initialState = {
  mobileNumber: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERID:
      return {
        ...state,
        mobileNumber: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
