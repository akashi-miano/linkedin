import { useState } from "react";
import { linkedIn } from "../assets/index";
import { auth } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [url, setURL] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          url: userAuth.user.photoURL,
        })
      );
    });
  };

  auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
    userAuth.user
      .updateProfile({
        displayName: name,
        photoURL: url,
      })
      .then(() => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoURL: url,
          })
        );
      });
  });

  return (
    <section className="bg-gray-200 min-h-[65vh] flex items-center">
      <div className="container flex justify-center">
        <form action="" className="max-w-[550px] " onSubmit={loginToApp}>
          <div className="img-wrapper mb-4">
            <img
              src={linkedIn}
              alt="linkedin logo"
              className="max-h-[85px] mx-auto object-cover"
            />
          </div>
          <div className="input-wrapper flow-content--s">
            <input
              type="text"
              className="w-full border-2 border-black rounded-md px-2 py-[.3rem]"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="url"
              className="w-full border-2 border-black rounded-md px-2 py-[.3rem]"
              placeholder="Profile pic URL (Optional)"
              value={url}
              onChange={(e) => setURL(e.target.value)}
            />
            <input
              type="email"
              className="w-full border-2 border-black rounded-md px-2 py-[.3rem]"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="w-full border-2 border-black rounded-md px-2 py-[.3rem]"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-cyan-500 text-white rounded-md border-2 border-black px-8 py-2 w-full text-xl hover:bg-cyan-600 focus:bg-cyan-600  duration-300"
            >
              Sign in
            </button>
          </div>
          <p className="text-center mt-2">
            Not a member?{" "}
            <a className="text-cyan-600 hover:text-orange-500 focus:text-orange-500 duration-300 hover:cursor-pointer ">
              Register Now
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
