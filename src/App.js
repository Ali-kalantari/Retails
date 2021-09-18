import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Components
import TourContainer from "./Tour/TourContainer";
import ReviewContainer from "./Review/ReviewContainer";
import Accordion from "./Accordion/Accordion";
import Tabs from "./Tabs/Tabs";
import Welcome from "./Welcome/Welcome";
import Test from "./Test";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/test">
          <Test />
        </Route>
        <Route path="/tour">
          <TourContainer />
        </Route>
        <Route path="/review">
          <ReviewContainer />
        </Route>
        <Route path="/acc">
          <Accordion />
        </Route>
        <Route path="/tabs">
          <Tabs />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
