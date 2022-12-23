import { Outlet, Link } from "react-router-dom";
import './nav.css';
const Layout = () => {
  return (
    <>
      <nav>
          <div className="nav-name"><strong>FunWithTriangle</strong></div>
        <ul>
          <li>
            <Link className="link" to="/">IsTriangle</Link>
          </li>
          <li>
            <Link className="link" to="/quiz">Quiz</Link>
          </li>
          <li>
            <Link className="link" to="/hypotneuse">Hypotaneuse</Link>
          </li>
          <li>
            <Link className="link" to="/area">Area</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
