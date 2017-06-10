import React, { Component } from 'react';
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {id: 1, title: 'learn react', completed: false},
        {id: 2, title: 'learn javascript', completed: false}
      ]
    }
  }
  render() {
    return (
      <div>
        <h1 className="header">
          todos
          <TodoInput />
        </h1>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
