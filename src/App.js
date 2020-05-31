import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
// Showing vs-code github setup

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='row'>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;

// <div className='col-4 bg-warning'>Hello from App.js</div>
// <div className='col-4 bg-danger'>Hello from App.js</div>
// <div className='col-4 bg-primary'>Hello from App.js</div>
