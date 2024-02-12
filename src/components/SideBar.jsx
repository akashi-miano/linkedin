import { useSelector } from "react-redux";
import { avatar } from "../assets";
import { selectUser } from "../redux/userSlice";
import { Avatar } from "@mui/material";

export const SideBar = () => {
  const user = useSelector(selectUser);
  return (
    <section>
      <aside className="shadow-lg rounded-md max-w-[350px] overflow-hidden mx-auto md:mx-0">
        <div className="bg-gradient-to-tl from-blue-500 via-green-500 via-yellow-500 to-pink-500 min-h-[100px] relative flex justify-center items-end mb-8">
          <Avatar
            src={user.url}
            alt={`${user.displayName}'s avatar`}
            className="h-[50px] w-[50px]   rounded-full translate-y-1/2"
          >
            {user.email[0]}
          </Avatar>
        </div>
        <header className="text-center flex flex-col items-center">
          <h1 className="font-bold text-2xl capitalize">{user.displayName}</h1>
          <span className="text-gray-500 text-md">{user.email}</span>
        </header>
        <hr className="border-b border-gray-200 mt-2 mb-6" />
        <div className="views mb -4 px-6 py-3">
          <div className="wrapper flex justify-between items-center">
            <p className="text-gray-500">Who viewed you</p>
            <p className="text-cyan-500">2,543</p>
          </div>
          <div className="wrapper flex justify-between items-center">
            <p className="text-gray-500">Views on post</p>
            <p className="text-cyan-500">2,448</p>
          </div>
        </div>
      </aside>
      <aside className="shadow-lg rounded-md max-w-[250px] overflow-hidden p-4 mt-6 mx-auto md:mx-0">
        <header className="mb-4">
          <h2 className="text-xl font-bold">Recent</h2>
        </header>
        <div className="">
          <div className="category">
            <p className="text-gray-500 font-medium">
              <span className="pr-2">#</span> reactjs
            </p>
          </div>
          <div className="category">
            <p className="text-gray-500 font-medium">
              <span className="pr-2">#</span> programming
            </p>
          </div>
          <div className="category">
            <p className="text-gray-500 font-medium">
              <span className="pr-2">#</span> design
            </p>
          </div>
          <div className="category">
            <p className="text-gray-500 font-medium">
              <span className="pr-2">#</span> developer
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default SideBar;
