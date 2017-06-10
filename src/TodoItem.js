import React from 'react'
import classNames from 'classnames'

export default class TodoItem extends React.Component {
  handleEdit() {

  }
  render() {
    const {todo, deleteTodo, toggleTodo} = this.props
    console.log(todo)
    return (
      <li className={classNames({completed: todo.completed})}>
        <div className="view">
						<input
							className="toggle"
							type="checkbox"
							checked={todo.completed}
							onChange={toggleTodo.bind(this, todo.id)}
						/>
						<label onDoubleClick={this.handleEdit}>
							{todo.title}
						</label>
						<button className="destroy" onClick={deleteTodo.bind(this, todo.id)} />
					</div>
      </li>
    )
  }
}
