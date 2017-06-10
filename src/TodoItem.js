import React from 'react'

export default class TodoItem extends React.Component {
  handleEdit() {

  }
  render() {
    return (
      <li className=''>
        <div className="view">
						<input
							className="toggle"
							type="checkbox"
							checked={this.props.todo.completed}
							onChange={this.props.onToggle}
						/>
						<label onDoubleClick={this.handleEdit}>
							{this.props.todo.title}
						</label>
						<button className="destroy" onClick={this.props.onDestroy} />
					</div>
      </li>
    )
  }
}
