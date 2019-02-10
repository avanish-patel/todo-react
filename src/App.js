import React, { Component } from 'react';
import './App.css';
import Todos from './compoents/Todos';
import AddTodo from './compoents/AddTodo';

class App extends Component {

  state = {
    todos : [
      {id: 1, content: "Thing 1"},
      {id: 2, content: "Thing 2"}
    ]
  }

  deleteTodo = (id) => {
    let updateTodos = this.state.todos.filter( todo => todo.id !== id);

    this.setState({
      todos : updateTodos
    });
  }

  addTodo = (todo) => {
      todo.id = Math.random();
      
      let addedTodos = [...this.state.todos, todo];

      this.setState({ todos: addedTodos});
  }

  render() {
    return (
      <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
        <AddTodo addTodo={this.addTodo}></AddTodo>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}></Todos>
      </div>
    );
  }
}

export default App;
