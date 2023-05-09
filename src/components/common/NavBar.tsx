import { ReactElement } from "react";
import { Link } from "react-router-dom";

const NavBar = ():ReactElement => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Link className="navbar-brand" to="/home">
              React TS App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="col-7">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile-setting">
                      Profile setting
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/setting">
                      Setting
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about-us">
                      About us
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-3">
            <ul className="navbar-nav">
              <li className="nav-item" onClick={()=>localStorage.removeItem('token')}>
                <Link className="nav-link" aria-current="page" to="/">
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
