
import { Link } from "react-router-dom";
import {AiOutlineArrowRight} from "react-icons/ai"
import resume from "../../public/resume/Mern Stack Developer resume of Rayhan Shorker.pdf"
import logo from "../assets/rayhan-low-resolution-logo-white-on-transparent-background.png"

const Navbar = () => {

    const navRoutes = (
        <>
          <li className="md:text-white   font-poppins cursor-pointer">
            <Link className=" font-bold hover:text-blue-700" to="/">Home</Link>
          </li>
          <li className="md:text-white  font-poppins cursor-pointer">
            <Link  className=" font-bold hover:text-blue-700">About</Link>
          </li>
   
           <li className="md:text-white  font-poppins cursor-pointer"> 
           <Link  className=" font-bold hover:text-blue-700">Contact</Link>
          </li>
         
          
        </>
      );
  
    return (
        <div className="navbar  w-full fixed z-30 top-0 left-0 py-5   shadow-sm  ">


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
      <div className="navbar-center hidden lg:flex text-black">
        <ul className="menu menu-horizontal px-1   font-poppins cursor-pointer" >
        {navRoutes}
        </ul>
      </div>
    
           
      <div className="navbar-end hover:-hue-rotate-90 group duration-300">
   <a href={resume} download={resume}>  
   
   <button className="btn  btn-primary bg-gradient-to-r from-cyan-500 to blue-900"> <span className="text-white  font-bold">DownLoad Resume </span>  <span className=" group-hover:rotate-90 duration-300 "><AiOutlineArrowRight size={25}></AiOutlineArrowRight></span> </button>
   </a>
         
      </div>




    </div>
    );
};

export default Navbar;