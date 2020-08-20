import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Blogs } from "./components/blogs";
import { About } from "./components/about";
import { Create } from "./components/create";
import { Nav } from "./common/nav";

function App() {
  return (
    <>
      <Nav></Nav>
      <Router>
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
