import React from 'react'

export default class TodoItem extends React.Component {
  handleEdit() {

  }
  render() {
    const {todo, deleteTodo} = this.props
    return (
      <li className=''>
        <div className="view">
						<input
							className="toggle"
							type="checkbox"
							checked={todo.completed}
							onChange={this.props.onToggle}
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
