import React, { Component } from "react";
import { ToDoLayout } from "./ToDoLayout";
import "../App.css";


class toDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      task: "",
      newTodoDeadline: "",
    };
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  async componentDidMount() {
    const todos = await this.fetchTodos();
    this.setState({ toDoList: todos });
  }

  async fetchTodos() {
    const taskAPI = "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
    const todos = await fetch(taskAPI);
    return todos.json();
  }


  deleteTask(todo) {
    const updatedList = this.state.toDoList.filter(
      (item) => item.id !== todo.id
    );
    this.setState({ toDoList: updatedList });
  }
  addTask(taskDescription, taskDeadline) {
    const newList = this.state.toDoList;
    newList.push({
      id: Math.floor(Math.random() * 100),
      description: taskDescription,
      deadline: taskDeadline,
    });
    this.setState({ toDoList: newList });
  }
  submitHandler(event) {
    event.preventDefault();
    const taskDescription = this.state.task;
    const taskDeadline = this.state.taskDeadline;
    if (taskDescription && taskDeadline) {
      this.addTask(taskDescription, taskDeadline);
    }
  }
  changeHandler(event) {
    if (event.target.name === "task")
      this.setState({ task: event.target.value });
    if (event.target.name === "deadline")
      this.setState({ taskDeadline: event.target.value });
  }

  render() {
    const taskRow = this.state.toDoList.map((todo) => (
      <ToDoLayout
        toDo={todo}
        key={todo.id}
        deleteItemHandler={this.deleteTask}
      />
      
    ));
    if (taskRow.length > 0) {
      return (
        <>
          <form onSubmit={this.submitHandler}>
            <label>Task: </label>
            <input
              type="text"
              name="task"
              onChange={this.changeHandler}
            ></input>
            <br />
            <label>Deadline: </label>
            <input
              type="date"
              name="deadline"
              onChange={this.changeHandler}
            ></input>
            <input className="add-button" type="submit" value="Add" />
          </form>
          <ul className="taskRow">{taskRow}</ul>
        </>
      );
    } else {
      return (
        <>
        <input className="add-button" type="submit" value="Add" />
        </>
      );
    }
  }
}

export default toDoList;