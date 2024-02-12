import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import { forwardRef } from "react";

const Post = forwardRef(({ name, description, content }, ref) => {
  const user = useSelector(selectUser);
  return (
    <section className="mt-8 bg-white rounded-md shadow-md py-4 px-8" ref={ref}>
      <div className="">
        <div className="wrapper flex items-center gap-4">
          <div className="img-wrapper ">
            <Avatar
              src={user?.url}
              alt={`${user?.displayName}'s avatar`}
              className="profile-img rounded-full w-[32px] h-[32px]  object-contain"
            >
              {user?.email[0]}
            </Avatar>
          </div>
          <div className="text-section flex flex-col">
            <span className="font-bold text-xl">{name}</span>
            <span className="text-gray-400 text-sm mt-[-5px]">
              {description}
            </span>
          </div>
        </div>
        <p className="mt-2">{content}</p>
        <div className="icons-wrapper flex  gap-4 text-gray-400 mt-6">
          <div className="wrapper flex items-center gap-4 group">
            <AiFillLike
              size={25}
              className="text-gray-400 group-hover:text-black focus:text-black duration-300 group-hover:cursor-pointer"
            />
            <span className="group-hover:text-black  duration-300 group-hover:cursor-pointer">
              Like
            </span>
          </div>
          <div className="wrapper flex items-center gap-4 group">
            <FaComment
              size={25}
              className="text-gray-400 group-hover:text-black focus:text-black duration-300 group-hover:cursor-pointer"
            />
            <span className="group-hover:text-black  duration-300 group-hover:cursor-pointer">
              Comment
            </span>
          </div>
          <div className="wrapper flex items-center gap-4 group">
            <FaShareAlt
              size={25}
              className="text-gray-400 group-hover:text-black focus:text-black duration-300 group-hover:cursor-pointer"
            />
            <span className="group-hover:text-black  duration-300 group-hover:cursor-pointer">
              Share
            </span>
          </div>
          <div className="wrapper flex items-center gap-4 group">
            <IoSend
              size={25}
              className="text-gray-400 group-hover:text-black focus:text-black duration-300 group-hover:cursor-pointer"
            />
            <span className="group-hover:text-black  duration-300 group-hover:cursor-pointer">
              Send
            </span>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Post;
