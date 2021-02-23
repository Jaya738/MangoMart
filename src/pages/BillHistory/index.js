import React from "react";
import features, { flaggedWith } from "../../features";
import { Footer } from "../../components";

function BillHistory() {
  return (
    <div>
      BillHistory
      <Footer />
    </div>
  );
}

export default flaggedWith(features.billHistory, BillHistory);
