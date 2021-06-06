import React, { Component } from "react";
import "../App.css";

export class ToDoLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: this.props.toDo,
      isEditing: false,
      hideUpdateButton: true,
    };
}

  editButtonClicked(event) {
    event.preventDefault();
    this.setState({
      isEditing: true,
      hideUpdateButton: false,
      hideEditButton: true,
    });
  }

  updateButtonClicked(event) {
    event.preventDefault();
    this.setState({
      isEditing: false,
      hideUpdateButton: true,
      hideEditButton: false,
    });
  }

  updateTodoItem(event) {
    const newTodo = this.state.todoItem;
    newTodo.description = event.target.value;
    this.setState({
      todoItem: newTodo,
    });
  }
  render() {
    let todoDetails = this.state.isEditing
      ? this.state.todoItem.description
      : this.state.todoItem.description + " | " + this.state.todoItem.deadline;
    return (
      <div className="tasks-list">
        <li>
          <input type="checkbox" /> &nbsp;
          <input
            className="todo"
            value={todoDetails}
            onChange={(event) => this.updateTodoItem(event)}
          ></input>
          &nbsp;
          <button
            className="button"
            type="button"
            onClick={() => this.props.deleteItemHandler(this.props.toDo)}
          >
            DELETE
          </button>
          <button
            className="edit-button"
            type="button"
            hidden={this.state.hideEditButton}
            onClick={(event) => this.editButtonClicked(event)}
          >
            EDIT
          </button>
          <button
            type="button"
            hidden={this.state.hideUpdateButton}
            onClick={(event) => this.updateButtonClicked(event)}
          >
            UPDATE
          </button>
        </li>
      </div>
    );
  }
}
;