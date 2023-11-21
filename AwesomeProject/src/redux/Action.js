export const USERID = 'USERID';
export const USERINFO = 'USERINFO';
export const PROFILEINFO = 'PROFILEINFO';

export const userAction = payload => {
  return {
    type: USERID,
    payload: payload,
  };
};

export const userInFOAction = payload => {
  return {
    type: USERINFO,
    payload: payload,
  };
};

export const profileDetails = payload => {
  return {
    type: PROFILEINFO,
    payload: payload,
  };
};
