import { ReactElement } from "react";
import { Link } from "react-router-dom";
// import Link from "../common/Link"

const Setting = (): ReactElement => {
  return (
    <>
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
