import { ADD_NEW_BILL } from "../actions/types";
import mockData from "../api/mock";
export const defaultState = {
  bills: mockData.bills,
};

const addNewBill = (state, action) => ({
  ...state,
  bills: [...state.bills, action.payload],
});

export default (state = defaultState, action) => {
  const handlers = {
    [ADD_NEW_BILL]: addNewBill,
  };
  return handlers[action.type] ? handlers[action.type](state, action) : state;
};
