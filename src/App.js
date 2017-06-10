import React, { Component } from 'react';
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

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
        <header className="header">
          <h1>todos</h1>
          <TodoInput />
        </header>
        <TodoList todos={this.state.todos} />
        <TodoFooter />
      </div>
    );
  }
}

export default App;
