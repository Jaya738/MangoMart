import React from "react";
import features, { flaggedWith } from "../../features";
import { Footer } from "../../components";

function PendingBills() {
  return (
    <div>
      <p>PendingBills</p>
      <Footer />
    </div>
  );
}

export default flaggedWith(features.pendingBills, PendingBills);
