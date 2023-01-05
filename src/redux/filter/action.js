import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";

export const colorchanged = (color, changedType) => {
  
  return {
    type: COLORCHANGED,
    payload: {
      color,
      changedType,
    },
  };
};
export const statuschanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload:status
  };
};
