import { ReactElement } from "react";
import { Link } from "react-router-dom";
import NavBar from "../common/NavBar";

const Setting = (): ReactElement => {
  return (
    <>
      <NavBar />
      <h2>Setting</h2>
      <br />
      <br />
      <Link to="/home">
        <button>Back to Home</button>
      </Link>
    </>
  );
};

export default Setting;
