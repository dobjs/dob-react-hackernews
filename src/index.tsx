import { Provider } from "dob-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./layout/layout.component";
import Store from "./stores/index";

ReactDOM.render(
  <Provider {...Store}>
    <Router>
      <Layout />
    </Router>
  </Provider>,
  document.getElementById("react-dom"),
);
