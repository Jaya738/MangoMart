import React from "react";
import { useSelector } from "react-redux";
import {
  PendingBillsItem,
  Accordion,
  PendingBillsItemTable,
} from "../../components";
import {
  getBills,
  getBillsHistory,
  getPendingBills,
} from "../../selectors/bills";
import { getCustomers } from "../../selectors/customers";
import { get } from "lodash";

function PendingBillsList({ searchInput }) {
  const bills = useSelector(getBills);
  const pendingBills = useSelector(getPendingBills);
  const customers = useSelector(getCustomers);
  return (
    <div>
      {Object.keys(pendingBills)
        .filter((eachCust) => {
          if (searchInput === "") {
            return eachCust;
          }
          if (
            get(customers, `${eachCust}.custName`)
              .toLowerCase()
              .includes(searchInput.toLowerCase())
          ) {
            return eachCust;
          }
        })
        .map((eachCust) => (
          <Accordion
            header={
              <PendingBillsItem
                key={eachCust}
                custName={get(customers, `${eachCust}.custName`)}
                quantity={get(pendingBills, `${eachCust}.totalQuantity`)}
                amount={get(pendingBills, `${eachCust}.totalAmount`)}
              />
            }
            content={
              <PendingBillsItemTable
                key={eachCust}
                bills={bills}
                billsList={get(pendingBills, `${eachCust}.bills`)}
              />
            }
          />
        ))}
    </div>
  );
}

export default PendingBillsList;
