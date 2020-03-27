import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import UploadImages from "./pages/UploadImages";
import ListImages from "./pages/ListImages";
import About from "./pages/About";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UploadImages} />
        <Route exact path="/list" component={ListImages} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}
