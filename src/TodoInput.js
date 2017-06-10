import React from 'react'

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleNewTodoKeyDown = this.handleNewTodoKeyDown.bind(this)
  }
  handleNewTodoKeyDown(e) {
    if (e.key === 'Enter') {
      this.props.addTodo(this.state.newTodo)
      this.setState({
        newTodo: ''
      })
    }
  }
  handleChange(e) {
    this.setState({
      newTodo: e.target.value
    })
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
