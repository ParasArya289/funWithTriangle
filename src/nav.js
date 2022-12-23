import { Outlet, Link } from "react-router-dom";
import "./nav.css";
const Layout = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav-name">
            <p>
              <strong>FunWithTriangle</strong>
            </p>
          </div>
          <ul>
            <li>
              <Link className="link" to="/">
                IsTriangle
              </Link>
            </li>
            <li>
              <Link className="link" to="/quiz">
                Quiz
              </Link>
            </li>
            <li>
              <Link className="link" to="/hypotnuse">
                Hypotanuse
              </Link>
            </li>
            <li>
              <Link className="link" to="/area">
                Area
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
