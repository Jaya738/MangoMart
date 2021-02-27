import React from "react";
import { useSelector } from "react-redux";
import { BillHistoryItem } from "../../components";
import { getBills, getBillsHistory } from "../../selectors/bills";

function BillHistoryList() {
  const bills = useSelector(getBills);
  const billsHistory = useSelector(getBillsHistory);
  return (
    <div>
      {billsHistory.map((eachBill) => (
        <BillHistoryItem key={eachBill} billId={eachBill} bills={bills} />
      ))}
    </div>
  );
}

export default BillHistoryList;
