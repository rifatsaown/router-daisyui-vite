import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-slate-400 rounded-3xl">
      <div className="flex-1">
        <Link to="home" className="btn btn-ghost normal-case text-xl">
          React Router
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="friends">Friends</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
