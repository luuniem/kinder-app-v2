import React, { useState, useRef } from "react";
import "./App.scss";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import { useOnClickOutside } from "./customHooks/clickOutside";
import Menu from "./components/Menu/Menu";
import Burger from "./components/Burger/Burger";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//local components
import Home from "./components/Home/Home";
import Addition from "./components/Math/Addition/Addition";
import Subtraction from "./components/Math/Subtraction/Subtraction";
import Multiplication from "./components/Math/Multiplication/Multiplication";
import Division from "./components/Math/Division/Division";
import Coloring from "./components/Coloring/Coloring";
import Stories from "./components/Stories/Stories";
import Points from "./components/Points/Points";

const App = props => {
  // const { children } = props;

  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div className="App" ref={node}>
      <Burger open={open} setOpen={setOpen} />

      <Router>
        <>
          <Menu open={open} setOpen={setOpen} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/addition" component={Addition} />
            <Route path="/subtraction" component={Subtraction} />
            <Route path="/multiplication" component={Multiplication} />
            <Route path="/division" component={Division} />
            <Route path="/coloring-pages" component={Coloring} />
            <Route path="/stories" component={Stories} />
            <Route path="/points-prizes" component={Points} />
          </Switch>
        </>
      </Router>
    </div>
  );
};

export default App;
