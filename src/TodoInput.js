import React from 'react'

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: ''
    }
  }
  handleNewTodoKeyDown() {

  }
  handleChange() {

  }
  render() {
    return (
      <input
				className="new-todo"
				placeholder="What needs to be done?"
				value={this.state.newTodo}
				onKeyDown={this.handleNewTodoKeyDown}
				onChange={this.handleChange}
				autoFocus={true}
			/>
    )
  }
}
