import { linkedInLogo, avatar } from "../assets/index";
import { FaHome } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { RiMessage2Fill } from "react-icons/ri";
import { FaSuitcase } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { BsFillGrid3X3GapFill, BsGrid } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../redux/userSlice";
import { auth } from "../firebase/firebase";
import { Avatar } from "@mui/material";

const Nav = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <nav
      className="py-[10px] sticky top-0 left-0 right-0 w-full shadow-lg text-gray-500 z-[999] bg-white"
      role="navigation"
    >
      <div className="container flex  justify-between items-center">
        <div className="logo-wrapper flex gap-4 items-center">
          <img
            src={linkedInLogo}
            alt="LinkedIn Logo"
            className="w-[35px] h-[35px]"
          />
          <form action="">
            <div className="input-wrapper relative">
              <input
                type="text"
                className="w-full h-full pr-8  px-10 py-2 border border-zinc-900  rounded-md bg-gray-100 placeholder:text-zinc-500"
                placeholder="Search"
              />
              <FaSearch
                size={27}
                className="absolute left-2 text-gray-500 bottom-1/2 translate-y-1/2 hover:text-black duration-300 focus:text-black hover:cursor-pointer"
              />
            </div>
          </form>
        </div>
        <ul className="links-list flex gap-4 items-center">
          <li>
            <a href="" className="flex flex-col items-center group">
              <FaHome
                size={27}
                className="text-gray-500 group-hover:text-black duration-300 group-hover:cursor-pointer group-focus:text-black"
              />
              <span className="group-hover:text-black duration-300 group-hover:cursor-pointer group-focus:text-black">
                Home
              </span>
            </a>
          </li>
          <li>
            <a href="" className="flex flex-col items-center group">
              <RiContactsFill
                size={27}
                className="text-gray-500 group-hover:text-black duration-300 group-hover:cursor-pointer group-focus:text-black"
              />
              <span className="group-hover:text-black duration-300 group-hover:cursor-pointer group-focus:text-black">
                My Network
              </span>
            </a>
          </li>
          <li>
            <a href="" className="flex flex-col items-center group">
              <RiMessage2Fill
                size={27}
                className="text-gray-500   group-hover:text-black duration-300 group-hover:cursor-pointer group-focus:text-black"
              />
              <span className="group-hover:text-black duration-300 group-hover:cursor-pointer group-focus:text-black">
                Jobs
              </span>
            </a>
          </li>
          <li>
            <a href="" className="flex flex-col items-center group">
              <FaSuitcase
                size={27}
                className="text-gray-500   group-hover:text-black duration-300 group-hover:cursor-pointer group-focus:text-black"
              />
              <span className="group-hover:text-black duration-300 group-hover:cursor-pointer group-focus:text-black">
                Messaging
              </span>
            </a>
          </li>
          <li>
            <a href="" className="flex flex-col items-center group">
              <FaBell
                size={27}
                className="text-gray-500   group-hover:text-black duration-300 group-hover:cursor-pointer group-focus:text-black"
              />
              <span className="group-hover:text-black duration-300 group-hover:cursor-pointer group-focus:text-black">
                Notifications
              </span>
            </a>
          </li>
          <li>
            <a href="" className="flex flex-col items-center group">
              <Avatar
                src={user?.url}
                alt={`${user?.displayName}'s avatar`}
                className="profile-img rounded-full "
                onClick={logOutOfApp}
                style={{ width: "27px", height: "27px" }}
              >
                {user?.email[0]}
              </Avatar>
              <span className="group-hover:text-black duration-300 group-hover:cursor-pointer group-focus:text-black">
                Me
              </span>
            </a>
          </li>
          <li>
            <a href="" className="flex flex-col items-center group">
              <BsFillGrid3X3GapFill
                size={27}
                className="text-gray-500 group-hover:text-black duration-300 group-hover:cursor-pointer group-focus:text-black"
              />
              <span className="group-hover:text-black duration-300 group-hover:cursor-pointer group-focus:text-black">
                Work
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
