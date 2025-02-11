import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

const App = () => {
  return (
    <UserContextProvider>
      <div>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
};

export default App;
