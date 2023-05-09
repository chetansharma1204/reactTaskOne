import { ReactElement } from "react";
import { Link } from "react-router-dom";
import NavBar from "../common/NavBar";

const Dashboard = (): ReactElement => {
  return (
    <>
      <NavBar />
      <h2>Dashboard</h2>
      <br />
      <br />
      <Link to="/home">
        <button>Back to Home</button>
      </Link>
    </>
  );
};

export default Dashboard;
