import React from "react";
import { useHistory } from "react-router-dom";
import colors from "../../constants/colors";
function Header(props) {
  const history = useHistory();
  const styles = {
    container: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      filter: "drop-shadow(2px -5px 15px rgba(85, 94, 88, 0.09))",
      color: colors.SECONDARY_TEXT_COLOUR,
      height: "40px",
      borderBottom: "1px solid" + colors.SECONDARY_TEXT_COLOUR,
      display: "flex",
      justifyContent: "space-between",
      transform: "translateY(50%)",
      fontWeight: "Bold",
    },
    backBtn: {
      marginLeft: "20px",
    },
    title: {
      fontSize: "16px",
    },
    amount: {
      marginRight: "20px",
    },
  };
  return (
    <div style={styles.container}>
      <i
        style={styles.backBtn}
        onClick={() => history.goBack()}
        class="fa fa-angle-left"
      ></i>
      <span style={styles.title}>{props.title}</span>
      <span style={styles.amount}>₹ {props.amount}</span>
    </div>
  );
}

export default Header;
