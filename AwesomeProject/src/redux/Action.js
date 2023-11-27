export const USERID = 'USERID';
export const USERINFO = 'USERINFO';
export const PROFILEINFO = 'PROFILEINFO';
export const USEREMAIL = 'USEREMAIL';
export const CUSINELIST = 'CUSINELIST';

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

export const userEmail = payload => {
  return {
    type: USEREMAIL,
    payload: payload,
  };
};

export const cusineList = payload => {
  return {
    type: CUSINELIST,
    payload: payload,
  };
};
