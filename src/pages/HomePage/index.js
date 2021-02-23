import React from "react";
import features, { flaggedWith } from "../../features";
import { Footer } from "../../components";

function Home() {
  return (
    <div>
      <p>Home Page</p>
      <i className="fa fa-car"></i>
      <Footer />
    </div>
  );
}

export default flaggedWith(features.homepage, Home);
