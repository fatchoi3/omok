import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Main from "../page/Main";
import Login from "../page/Login";





function App() {
 

  return (
    <React.Fragment>
        <ConnectedRouter  history={history}>
          <Route path="/" exact component={Main} />
          <Route path="/login" exact component={Login} />
        </ConnectedRouter>
    </React.Fragment>
  );
}
export default App;