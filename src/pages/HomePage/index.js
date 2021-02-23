import React from "react";
import features, { flaggedWith } from "../../features";
import { Header, Footer } from "../../components";
import strings from "../../utils/localization";

function Home() {
  return (
    <div>
      <Header title={strings.appName} />
      <Footer />
    </div>
  );
}

export default flaggedWith(features.homepage, Home);
