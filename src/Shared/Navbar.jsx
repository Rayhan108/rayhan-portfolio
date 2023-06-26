
import { Link } from "react-router-dom";

import logo from "../assets/rayhan-low-resolution-logo-color-on-transparent-background.png"

const Navbar = () => {

    const navRoutes = (
        <>
          <li className="text-white">
            <Link className=" font-bold" to="/">Home</Link>
          </li>
          <li className="text-white">
            <Link  className=" font-bold">About</Link>
          </li>
   
           <li className="text-white"> 
           <Link  className=" font-bold">Contact</Link>
          </li>
         
          
        </>
      );
  
    return (
        <div className="navbar  w-full   shadow-sm  ">


  <div className="navbar-start ">
        <div className="dropdown">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            
           {navRoutes}
          </ul>
        </div>
    
       <Link to="/">
       
       <div>
    
        <img className="mr-3"
            style={{ width: "200px" }}
            src={logo}
            alt="logo"
          />
     
        </div>
        </Link>
          
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navRoutes}
        </ul>
      </div>
    
           
      <div className="navbar-end text-white">
   
      <button className="btn btn-outline btn-primary">DownLoad Resume</button>
         
      </div>




    </div>
    );
};

export default Navbar;