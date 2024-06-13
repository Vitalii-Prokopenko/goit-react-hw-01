import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./components/profile/Profile";
import FriendList from "./components/friendlist/Friendlist";
import userData from "./userData.json";
import friends from "./friends.json";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
