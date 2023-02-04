import React, { useEffect, useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArticleIcon from "@mui/icons-material/Article";
import Post from "./Post";
import { db } from "../Firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot, 
  orderBy,
  query
} from "firebase/firestore";
import {useSelector } from 'react-redux';
import {selectUser } from '../features/userSlice';
import FlipMove from "react-flip-move";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const collectionRef = collection(db, 'posts');
  const user = useSelector(selectUser);


  useEffect(()=>{
    // async function getPost(db) {

    //     const postSnapshot = await getDocs(collectionRef);
    //     console.log(postSnapshot.docs.data())
    //     setPosts(postSnapshot.docs.map(doc => (
    //         {
    //             id : doc.id,
    //             data: doc.data(),
    //         }
    //     )));
    //   }

    // getPost(db);
    const q = query(collectionRef, orderBy('timestamp','desc'));
    onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map(doc => (
                {
                    id : doc.id,
                    data: doc.data(),
                }
            )));
    });
  },[])

  const sendPost = async (e) => {
    e.preventDefault();

    addDoc(collectionRef, {
        name: user.displayName,
        desc: user.email,
        message: input,
        photoUrl: user.photoUrl || '',
        timestamp: serverTimestamp()
      })
      .catch((er)=>(
        console.log(er.message)
      ))

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={input}
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} text="Photo" color="#70B5F9" />
          <InputOption Icon={VideoLibraryIcon} text="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} text="Event" color="#C0CBCD" />
          <InputOption Icon={ArticleIcon} text="Write artice" color="#7FC15E" />
        </div>
      </div>

     <FlipMove>
      {posts.map(({ id, data: { name, desc, message, photoUrl} }) => (
          <Post
            key={id}
            name={name}
            desc={desc}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
     </FlipMove>
    </div>
  );
};

export default Feed;
