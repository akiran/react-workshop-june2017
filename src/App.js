import React, { Component } from 'react';
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import uuid from 'uuid/v4'

function filterTodos(todos, filter) {
  switch  (filter) {
    case 'all': return todos
    case 'active': return todos.filter(todo => !todo.completed)
    case 'completed': return todos.filter(todo => todo.completed)
    default: return todos
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {id: uuid(), title: 'learn react', completed: false},
        {id: uuid(), title: 'learn javascript', completed: false}
      ],
      todoFilter: 'all'
    }
    this.addTodo = this.addTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
    this.setTodoFilter = this.setTodoFilter.bind(this)
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
  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }
  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        return {
          ...todo,
          completed: (todo.id === id) ? !todo.completed : todo.completed
        }
      })
    })
  }
  setTodoFilter(todoFilter) {
    this.setState({todoFilter})
  }
  render() {
    const activeTodos= filterTodos(this.state.todos, 'active')
    const filteredTodos = filterTodos(this.state.todos, this.state.todoFilter)
    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          <TodoInput addTodo={this.addTodo}/>
        </header>
        <TodoList
          todos={filteredTodos}
          deleteTodo={this.deleteTodo}
          toggleTodo={this.toggleTodo}
        />
        <TodoFooter
          count={activeTodos.length}
          todoFilter={this.state.todoFilter}
          setTodoFilter={this.setTodoFilter} />
      </div>
    );
  }
}

export default App;
