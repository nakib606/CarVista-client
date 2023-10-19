import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../../public/logo.webp";
const Navbar = () => {
  const navLinks = (
    <div className="lg:flex md:gap-10">
      <li>
        <NavLink
          className="px-0 text-base font-semibold text-white whitespace-nowrap"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="px-0 text-base font-semibold text-white whitespace-nowrap"
          to="/addProduct"
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          className="px-0 text-base font-semibold text-white whitespace-nowrap"
          to="/myCart"
        >
          My Cart
        </NavLink>
      </li>
    </div>
  );
  return (
    <div className="bg-[#40404099]  fixed top-0 w-full z-50">
      <div className="navbar max-w-6xl py-0 mx-auto">
        <div className="navbar-start">
          <div className="flex items-center">
            <img src={logo} className="w-20 h-20" />
            <a className="text-3xl text-white font-logo ">CarVista</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="lg:hidden dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-4 z-[1] shadow bg-base-100 rounded-lg ps-4 "
            >
              {navLinks}
              <Link className=" lg:hidden  mt-4" to="/login">
                <button className="bg-primary-color text-white px-4 py-2 rounded-md duration-500 hover:bg-white hover:text-primary-color">
                  Login
                </button>
              </Link>
            </ul>
          </div>
          <Link className="hidden lg:block" to="/login">
            <button className=" bg-primary-color text-white px-4 py-2 rounded-md duration-500 hover:bg-white hover:text-primary-color">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
