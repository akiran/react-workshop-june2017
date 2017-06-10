import React, { Component } from 'react';
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import uuid from 'uuid/v4'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {id: uuid(), title: 'learn react', completed: false},
        {id: uuid(), title: 'learn javascript', completed: false}
      ]
    }
    this.addTodo = this.addTodo.bind(this)
  }
  addTodo(title) {
    this.setState({
      todos: this.state.todos.concat({
        id: uuid(),
        completed: false,
        title
      })
    })
  }
  render() {
    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          <TodoInput addTodo={this.addTodo}/>
        </header>
        <TodoList todos={this.state.todos} />
        <TodoFooter />
      </div>
    );
  }
}

export default App;
