import * as React from "react";
import NavBar from "./NavBar";

const IndexPage = () => {
  return (
    <div>
      <NavBar />
      Hello This is my first Gatsby Project
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
