const {USERID, USERINFO, PROFILEINFO} = require('./Action');

const initialState = {
  userID: '',

  userInfo: {
    name: '',
    num: '',
  },

  profileInfo: {
    name: '',
    address: '',
    pincode: '',
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERID:
      return {
        ...state,
        userID: action.payload,
      };
    case USERINFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case PROFILEINFO:
      return {
        ...state,
        profileInfo: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
