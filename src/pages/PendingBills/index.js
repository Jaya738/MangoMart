import React from "react";
import features, { flaggedWith } from "../../features";
import { Header, Footer } from "../../components";
import strings from "../../utils/localization";

function PendingBills() {
  return (
    <div>
      <Header title={strings.pendingBills} amount={0} />
      <Footer />
    </div>
  );
}

export default flaggedWith(features.pendingBills, PendingBills);
