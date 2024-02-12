import { useDispatch, useSelector } from "react-redux";
import Feed from "./components/Feed";
import Nav from "./components/Nav";
import Login from "./components/Login";
import SideBar from "./components/SideBar";
import { login, logout, selectUser } from "./redux/userSlice";
import { useEffect } from "react";
import { auth } from "./firebase/firebase";
import Widgets from "./components/Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout);
      }
    });
  }, []);
  return (
    <>
      <Nav />
      {!user ? (
        <Login />
      ) : (
        <main className="bg-gray-100 pb-16 grid--1x3 gap-6 py-8 px-16 height">
          <SideBar />
          <Feed />
          <Widgets />
        </main>
      )}
    </>
  );
}

export default App;
