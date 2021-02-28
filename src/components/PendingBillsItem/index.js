import React from "react";
import { get } from "lodash";
import { formatDate } from "../../utils/formatting";
import colors from "../../constants/colors";

function PendingBillsItem({ key, custName, quantity, amount }) {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "flex-start",
      margin: "5px",
      borderRadius: "10px",
      color: colors.SECONDARY_TEXT_COLOUR,
    },
    leftContent: {
      display: "flex",
      flexDirection: "column",
      width: "60%",
      justifyContent: "center",
    },
    rightContent: {
      display: "flex",
      justifyContent: "space-between",
      width: "40%",
    },
    custName: {
      fontSize: "16px",
    },
    quantity: {
      color: colors.SECONDARY_COLOUR,
      fontSize: "10px",
    },
    amount: {
      display: "flex",
      alignItems: "center",
    },
    settleBtnOuter: {
      float: "right",
      backgroundColor: colors.SUCCESS,
      color: colors.SUCCESS,
      borderRadius: "50%",
      fontSize: "20px",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      border: "3px solid " + colors.SUCCESS,
    },
    settleBtnInner: {
      backgroundColor: colors.SUCCESS,
      color: colors.WHITE,
      borderRadius: "50%",
      padding: "6px 7px",
      fontSize: "20px",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      border: "2px solid " + colors.WHITE,
    },
  };
  return (
    <div style={styles.container} key={key}>
      <div style={styles.leftContent}>
        <div style={styles.custName}>{custName}</div>
        <div style={styles.quantity}>{quantity} dozens</div>
      </div>
      <div style={styles.rightContent}>
        <div style={styles.amount}>₹{amount}/-</div>
        <div style={styles.settleBtnOuter}>
          <div style={styles.settleBtnInner}>
            <i class="fa fa-check"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PendingBillsItem;
