import { FaPen, FaPhotoVideo } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { MdEvent, MdEventAvailable } from "react-icons/md";
import { MdArticle } from "react-icons/md";
import Post from "./Post";
import { useEffect, useState, forwardRef } from "react";
import { auth } from "../firebase/firebase";
import db from "../firebase/firebase";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import FlipMove from "react-flip-move";
const Feed = () => {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user?.displayName,
      description: user?.email,
      content: input,
      imgURL: user?.url || "",
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <section className="">
      <div className="container">
        <form
          className="bg-white rounded-md shadow-md py-6 max-h-[135px] px-4"
          onSubmit={sendPost}
        >
          <div className="input-wrapper flex items-center border-gray-300 relative">
            <FaPen size={25} className="text-gray-500 absolute left-6" />
            <input
              type="text"
              className="w-full h-full rounded-full border-2  px-16 py-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="icons flex justify-around mt-4 w-full">
            <div className=" flex gap-2 items-center">
              <FaPhotoVideo size={25} className="text-cyan-500" />
              <span className="text-gray-500 text-lg hover:text-black duration-300 focus:text-black cursor-pointer">
                Photo
              </span>
            </div>
            <div className=" flex gap-2 items-center">
              <FaVideo size={25} className="text-orange-500" />
              <span className="text-gray-500 text-lg hover:text-black duration-300 focus:text-black cursor-pointer">
                Video
              </span>
            </div>
            <div className=" flex gap-2 items-center">
              <MdEvent size={25} className="text-gray-500" />
              <span className="text-gray-500 text-lg hover:text-black duration-300 focus:text-black cursor-pointer">
                Event
              </span>
            </div>
            <div className=" flex gap-2 items-center">
              <MdArticle size={25} className="text-green-500" />
              <span className="text-gray-500 text-lg hover:text-black duration-300 focus:text-black cursor-pointer">
                Article
              </span>
            </div>
            <div className=" flex gap-2 items-center"></div>
          </div>
        </form>
        <FlipMove>
          {posts.map(({ id, data: { name, description, content, imgURL } }) => (
            <Post
              key={id}
              name={name}
              description={description}
              content={content}
            />
          ))}
        </FlipMove>
      </div>
    </section>
  );
};

export default Feed;
