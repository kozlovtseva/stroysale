import React from "react";
import { render } from "react-dom";
import { createBrowserHistory } from "history";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/store";

const history = createBrowserHistory();
const store = configureStore(history);

render(
    <App history={history} store={store} />,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
