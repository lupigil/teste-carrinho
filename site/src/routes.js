
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Teste from './infoX/home/index'


export default function Routes() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact={true} component={Teste} />
          </Switch>
      </BrowserRouter>
  )
}