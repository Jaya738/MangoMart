import React, { useState } from "react";
import features, { flaggedWith } from "../../features";
import {
  Header,
  Footer,
  Search,
  BillHistoryList,
  Wrapper,
} from "../../components";
import strings from "../../utils/localization";

function BillHistory() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      <Header title={strings.billHistory} amount={0} />
      <Wrapper>
        <Search value={searchInput} setValue={setSearchInput} />
        <BillHistoryList searchInput={searchInput} />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default flaggedWith(features.billHistory, BillHistory);
