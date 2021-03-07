import { SETTLE_BILL } from "./types";

export const settleBill = (custId, bill) => {
  return {
    type: SETTLE_BILL,
    payload: {
      custId,
      bill,
    },
  };
};
