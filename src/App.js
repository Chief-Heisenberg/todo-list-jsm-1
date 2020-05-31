import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
// Showing vs-code github setup

class App extends Component {
  state = {
    items: [
      { id: 1, title: "Wake up" },
      { id: 2, title: "Make breakfast" }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = (e) => {
    console.log("Hello from handleChange");
  };

  handleSubmit = (e) => {
    console.log("Hello from handleSubmit");
  };

  clearList = (e) => {
    console.log("Hello from clearList");
  };

  handleDelete = (e) => {
    console.log(`Hello from handleDelete ${this.state.id}`);
  };

  handleEdit = (e) => {
    console.log(`Hello from handleEdit ${this.state.id}`);
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-5'>
            <h3 className='text-capitalize text-center'>Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.state.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// <div className='col-4 bg-warning'>Hello from App.js</div>
// <div className='col-4 bg-danger'>Hello from App.js</div>
// <div className='col-4 bg-primary'>Hello from App.js</div>
