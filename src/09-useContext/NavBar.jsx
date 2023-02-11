import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          useContext
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="#">
                Features
              </Link>
            </li>
           
           
          </ul>
        </div>
      </div>
    </nav>
  );
};
