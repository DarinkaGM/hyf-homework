import React, { Component } from "react";
import "../App.css";

export class ToDoItems extends Component {
    constructor(props) {
        super(props);
        this.state = {todoItem:this.props.toDo};
    }
  render() {
    return (
      <div className = "checklist"> 
        <li>
          <input className ="checkbox" type="checkbox" /> 
          <span className="todo">{this.state.todoItem.description}</span> 
          <br></br>
          <button className="button" type= "button" onClick={()=>this.props.deleteItem(this.props.toDo)}>Delete</button>
          </li>
          <br></br>
      </div>
    );
  }
}