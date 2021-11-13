import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Form from "./Form";
import Home from "./Home";

const App = () => {
  return (
    <div className="header">
      <h1>Lambda Pizza </h1>
      <nav>
      <Link to="/"><button id="home-button">Home</button></Link>
      <Link to="/pizza"><button id="order-pizza">Order Pizza!</button></Link>
      </nav>
      <Switch>
      <Route path="/pizza" component={Form} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};
export default App;












