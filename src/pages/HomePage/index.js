import React from "react";
import features, { flaggedWith } from "../../features";
import { Header, Footer, Wrapper } from "../../components";
import strings from "../../utils/localization";
import Banner from "../../assets/Banner.svg";

function Home() {
  const styles = {
    banner: {
      width: "80%",
      margin: "20px 0px",
      padding: "16px",
    },
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  return (
    <div>
      <Header title={strings.appName} />
      <Wrapper>
        <div style={styles.container}>
          <img style={styles.banner} src={Banner} />
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default flaggedWith(features.homepage, Home);
