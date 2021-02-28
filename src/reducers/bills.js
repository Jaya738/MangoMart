import { ADD_NEW_BILL } from "../actions/types";
import mockData from "../api/mock";
export const defaultState = {
  bills: mockData.bills, //{}
  pendingBills: mockData.pendingBills, //{}
  billsHistory: mockData.billsHistory, //[]
  totals: {
    totalSold: 0,
    pendingAmount: 0,
    paidAmount: 0,
  },
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
