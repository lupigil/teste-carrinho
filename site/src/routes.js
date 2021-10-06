import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact={true} component={} />
          </Switch>
      </BrowserRouter>
  )
}