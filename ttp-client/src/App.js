import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import singleMovie from "./pages/SingleMovie";
//import { Container } from "semantic-ui-react";
import MenuBar from "./components/MenuBar";

function App() {

  return (
    <div className="App">

      <Router>
        <MenuBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/singlemovie" componenet={singleMovie} />
      </Router>

    </div>
  );
}

export default App;
