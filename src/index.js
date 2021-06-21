import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Routes from "./Routes";
import store from "./redux/store";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  rootElement
);
