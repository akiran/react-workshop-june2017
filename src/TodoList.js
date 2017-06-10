import React from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
  render() {
    return (
      <section className='main'>
        <ul className='todo-list'>
          {this.props.todos.map(todo => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={this.props.deleteTodo}
                toggleTodo={this.props.toggleTodo}
              />
            )
          })}
        </ul>
      </section>
    )
  }
}
