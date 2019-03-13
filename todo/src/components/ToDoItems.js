import React from "react";
import { connect } from "react-redux";

// When we need an action creator, import it here, and pass it
// into the connect function
import { addTodo } from "../actions/index";

class ToDoItems extends React.Component {
  state = {
    newItem: ""
  };

  handleChanges = e => {
    this.setState({ newItem: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newItem);
    this.setState({ newItem: "" });
  };

  render() {
    return (
      <>
        <div className="friends-list">
          {this.props.todoList.map(item => (
            <h4 key={item.id}>
              {item.item}
              {item.done && <i className="fas fa-dragon" />}
            </h4>
          ))}
        </div>
        <input
          type="text"
          name="newItem"
          value={this.state.newItem}
          onChange={this.handleChanges}
          placeholder="Add new item"
        />
        <button onClick={this.newItem}>Add Item</button>
      </>
    );
  }
}

// Connecting a component to the Redux store-
// - Import connect
// - curry the connect function - connect()()
// - First invocation takes in mSTP and action creator object
// - Second invocation takes in the component

const mapStateToProps = state => {
  return {
    todoList: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(ToDoItems);