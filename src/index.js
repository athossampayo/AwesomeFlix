import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import CadastroRepo from "./pages/cadastro/Repo"
import CadastroCategoria from "./pages/cadastro/Categoria"
import { BrowserRouter, Switch, Route } from "react-router-dom";

const P404 = () => (<div>Página 404</div>)
/**/
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/cadastro/repo" component={CadastroRepo} exact/>
        <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
        <Route component={P404} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
