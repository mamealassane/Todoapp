import { useState } from "react";
import "./styles.css";
import AddTask from "./AddTask";
import TasksHeader from "./TasksHeader";
import ListTask from "./ListTask";
import { Provider } from "react-redux";
import { store } from "./redux";

export default function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <article>
          <TasksHeader />
          <ListTask />
          <footer>
            <AddTask />
          </footer>
        </article>
      </div>
    </Provider>
  );
}
