import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

import ToDoList from "./components/ToDoList";
import ToDoItems from './components/ToDoItems'
import "./index.css";

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <ToDoList />
      <ToDoItems />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);