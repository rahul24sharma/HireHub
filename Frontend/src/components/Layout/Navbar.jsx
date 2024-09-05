import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaBriefcase, FaRegClipboard, FaFileAlt, FaPlusSquare, FaList } from 'react-icons/fa';


const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message), setIsAuthorized(true);
    }
  };

  return (

    <nav className={isAuthorized ? "navbarShow" : "navbarHide"}>
    <div className="container">
      <div className="logo">
        <img src="/hh.png" alt="logo" />
      </div>
      <ul className={!show ? "menu" : "show-menu menu"}>
      <li>
  <Link to={"/"} onClick={() => setShow(false)}>
    <div className="nav-item">
      <FaHome />
      <span>Home</span>
    </div>
  </Link>
</li>
<li>
  <Link to={"/job/getall"} onClick={() => setShow(false)}>
    <div className="nav-item">
      <FaBriefcase />
      <span>Jobs</span>
    </div>
  </Link>
</li>
<li>
  <Link to={"/applications/me"} onClick={() => setShow(false)}>
    <div className="nav-item">
      {user && user.role === "Employer" ? <FaFileAlt /> : <FaRegClipboard />}
      <span>{user && user.role === "Employer" ? "Applications" : "My Applications"}</span>
    </div>
  </Link>
</li>
{user && user.role === "Employer" && (
  <>
    <li>
      <Link to={"/job/post"} onClick={() => setShow(false)}>
        <div className="nav-item">
          <FaPlusSquare />
          <span>Post Job</span>
        </div>
      </Link>
    </li>
    <li>
      <Link to={"/job/me"} onClick={() => setShow(false)}>
        <div className="nav-item">
          <FaList />
          <span>My Jobs</span>
        </div>
      </Link>
    </li>
  </>
)}

        <button onClick={handleLogout}>LOGOUT</button>
      </ul>
      <div className="hamburger">
        <GiHamburgerMenu onClick={() => setShow(!show)} />
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
