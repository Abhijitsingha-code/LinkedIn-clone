import React, {useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from './components/Widgets'
import { useSelector } from "react-redux";
import {selectUser , login, logout} from "./features/userSlice";
import Login from "./components/Login";
import { useDispatch } from "react-redux";
import { auth } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user)=>{
        if(user){
            dispatch(login({
              email: user.email,
              uid: user.uid,
              displayName: user.displayName,
              photoUrl: user.photoURL,
            }))
        }else{
          dispatch(logout())
        }
      })
  }, [])
  
  return (
    <div className="app">
      <Header />
      {!user ? 
      (
        <Login />
      ) : 
      (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets/>
        </div>
      )}
    </div>
  );
}

export default App;
