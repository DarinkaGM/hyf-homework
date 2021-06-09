import React, { Component } from "react";
import { ToDoItems } from "./ToDoLayout";
import "../App.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [
        { id: 1, description: "Exercise" },
        { id: 2, description: "Study" },
        { id: 3, description: "Call my brother" },
        { id: 4, description: "Buy fruits" },
        { id: 5, description: "Fix the bike" },
      ],
    };
    this.addToDo = this.addToDo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
  }
  addToDo() {
    const newList = [
      ...this.state.toDoList,
      {
        id: Math.floor(Math.random() * 100000) + Date.now(),
        description: "toDo",
      },
    ];
    this.setState({ toDoList: newList });
  }

  deleteToDo(todo) {
    const todoListNew = this.state.toDoList.filter(
      (item) => item.id != todo.id
    );
    this.setState({ toDoList: todoListNew });
  }

  render() {
    const { toDoList } = this.state;
    const rows = this.state.toDoList.map((todo) => (
      <ToDoItems toDo={todo} key={todo.id} deleteItem={this.deleteToDo} />
    ));
    if (rows.length > 0) {
      return (
        <>
          <ul>{rows}</ul>
          <button className="add-button" onClick={this.addToDo}>
            Add
          </button>
        </>
      );
    }
  }
}

export default ToDoList;

