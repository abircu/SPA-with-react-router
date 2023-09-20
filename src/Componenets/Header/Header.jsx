import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-amber-200 gap-5">
      <h2 className="text-3xl font-bold">Navbar</h2>
      <nav className=" text-blue-600  text-2xl">
        <Link className="pl-6" to="/">
          Home
        </Link>
        <Link className="pl-6" to="/about">
          About
        </Link>
        <Link className="pl-6" to="/contact">
          Contact
        </Link>
        <Link className="pl-6" to="/service">
          Service
        </Link>
        <NavLink className="pl-6  underline-offset-2" to="/users">
          Users
        </NavLink>
        {/* <Link className="pl-6" to="/users">
          user
        </Link> */}
        <Link className="pl-6" to="/posts">
          Posts
        </Link>
      </nav>
    </div>
  );
};

export default Header;
