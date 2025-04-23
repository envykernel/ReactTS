import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm relative z-10">
      {" "}
      {/* Added z-10 */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          daisyUI
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/exercises/props">Props Exercise</Link>
          </li>
          <li>
            <details className="relative">
              <summary>Exercises</summary>
              {/* Added dropdown class with z-index */}
              <ul className="absolute right-0 mt-2 w-56 bg-base-100 rounded-box shadow-lg z-20">
                <li>
                  <Link to="/exercises/props">Props</Link>
                </li>
                <li>
                  <Link to="/exercises/state">useState</Link>
                </li>
                <li>
                  <Link to="/exercises/effects">useEffect</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
