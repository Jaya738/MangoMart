import React, { useState } from "react";
import features, { flaggedWith } from "../../features";
import {
  Header,
  Wrapper,
  Search,
  PendingBillsList,
  Footer,
} from "../../components";
import strings from "../../utils/localization";

function PendingBills() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      <Header title={strings.pendingBills} amount={0} />
      <Wrapper>
        <Search value={searchInput} setValue={setSearchInput} />
        <PendingBillsList searchInput={searchInput} />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default flaggedWith(features.pendingBills, PendingBills);
