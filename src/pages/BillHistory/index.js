import React from "react";
import features, { flaggedWith } from "../../features";

function BillHistory() {
  return <div>BillHistory</div>;
}

export default flaggedWith(features.billHistory, BillHistory);
