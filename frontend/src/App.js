import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Blogs } from "./components/blogs";
import { About } from "./components/about";
import { Create } from "./components/create";
import { NavBar } from "./common/nav";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <div>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/create">
            <Create></Create>
          </Route>
          <Route exact path="/">
            Hello
          </Route>
        </div>
      </Router>
    </>
  );
}

export default App;
