
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './infoX/home/index'
import Detalhes from './infoX/detalheProduto/index'
import Carrinho from './infoX/carrinho/index'


export default function Routes() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/detalhe"  component={Detalhes} />
              <Route path="/carrinho"  component={Carrinho} />
          </Switch>
      </BrowserRouter>
  )
}