import React from "react";
import { Wrapper, Header, Footer } from "../../components";
import strings from "../../utils/localization";

function AddBill() {
  return (
    <div>
      <Header title={strings.pendingBills} amount={0} />
      <Wrapper></Wrapper>
      <Footer />
    </div>
  );
}

export default AddBill;
