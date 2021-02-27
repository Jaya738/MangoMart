import React from "react";
import features, { flaggedWith } from "../../features";
import { Header, Footer, BillHistoryItem } from "../../components";
import strings from "../../utils/localization";

function BillHistory() {
  return (
    <div>
      <Header title={strings.billHistory} amount={0} />
      <BillHistoryItem />
      <Footer />
    </div>
  );
}

export default flaggedWith(features.billHistory, BillHistory);
