import { ReactElement } from "react";
import { Link } from "react-router-dom";
import NavBar from "../common/NavBar";

const ProfileSetting = (): ReactElement => {
  return (
    <>
      <NavBar />
      <h2>Profile Setting</h2>
      <br />
      <br />
      <Link to="/home">
        <button>Back to Home</button>
      </Link>
    </>
  );
};

export default ProfileSetting;
