const {
  USERID,
  USERINFO,
  PROFILEINFO,
  USEREMAIL,
  CUSINELIST,
  GOOGLEUSERINFO,
} = require('./Action');

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

  userEmail: {
    userName: '',
  },
  cusineList: {
    cusine: [],
  },

  googleUserInfo: {
    image: '',
    name: '',
    email: '',
    lastname: '',
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
    case USEREMAIL:
      return {
        ...state,
        userEmail: action.payload,
      };
    case CUSINELIST:
      return {
        ...state,
        cusineList: action.payload,
      };
    case GOOGLEUSERINFO:
      return {
        ...state,
        googleUserInfo: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
