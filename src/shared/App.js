import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import {BrowserRouter, Route} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Main from "../page/Main";
import Login from "../page/Login";

import Chatting from "../components/Chatting"
const ENDPOINT = "http://127.0.0.1:4001";
function App() {
 
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    });
  }, []);

  return (
    <React.Fragment>
        <ConnectedRouter  history={history}>
        <p>
      It'sss<time dateTime={response}>{response}</time>
    </p>
          <Route path="/" exact component={Main} />
          <Route path="/login" exact component={Login} />
          <Route path="/test" exact component={Chatting} />
        </ConnectedRouter>

    </React.Fragment>
  );
}
export default App;