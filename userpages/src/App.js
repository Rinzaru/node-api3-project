import React from "react";
import UserList from "./components/userList";
import { Route } from "react-router-dom";
import UserComments from "./components/userComment";
function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <UserList />
      </Route>
      <Route exact path="/user/:id">
        <UserComments />
      </Route>
    </div>
  );
}

export default App;
