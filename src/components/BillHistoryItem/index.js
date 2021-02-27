import React from "react";
import { get } from "lodash";

function BillHistoryItem({ key, billId, bills }) {
  const billData = get(bills, `${billId}`);
  return <div>{billData.custName}</div>;
}

export default BillHistoryItem;
