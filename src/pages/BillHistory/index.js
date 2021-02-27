import React from "react";
import features, { flaggedWith } from "../../features";
import { Header, Footer, BillHistoryList, Wrapper } from "../../components";
import strings from "../../utils/localization";

function BillHistory() {
  return (
    <div>
      <Header title={strings.billHistory} amount={0} />
      <Wrapper>
        <BillHistoryList />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default flaggedWith(features.billHistory, BillHistory);
