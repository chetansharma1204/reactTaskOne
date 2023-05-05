import { ReactElement } from "react";
import { Link } from "react-router-dom";

const InvalidPage = (): ReactElement => {
  return (
    <>
      <h2>404: Page Not Found</h2>
      <br />
      <br />
      <Link to="/home">
        <button>Back to Home</button>
      </Link>
    </>
  );
};

export default InvalidPage;
