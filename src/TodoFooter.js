import React from 'react'
import classNames from 'classnames'


export default class TodoFooter extends React.Component {
  render() {
    const {todoFilter, setTodoFilter} = this.props
    const activeTodoWord = this.props.count === 1 ? 'item' : 'items'
    return (
      <footer className="footer">
					<span className="todo-count">
						<strong>{this.props.count}</strong> {activeTodoWord} left
					</span>
					<ul className="filters">
						<li>
							<a
                onClick={setTodoFilter.bind(this, 'all')}
								className={classNames({selected: todoFilter === 'all'})}>
									All
							</a>
						</li>
						{' '}
						<li>
							<a
                onClick={setTodoFilter.bind(this, 'active')}
								className={classNames({selected: todoFilter === 'active'})}>
									Active
							</a>
						</li>
						{' '}
						<li>
							<a
                onClick={setTodoFilter.bind(this, 'completed')}
								className={classNames({selected: todoFilter === 'completed'})}>
									Completed
							</a>
						</li>
					</ul>
				</footer>
    )
  }
}
