export const USERID = 'USERID';

export const userAction = payload => {
  return {
    type: USERID,
    payload: payload,
  };
};
