import React from 'react'
import classNames from 'classnames'


export default class TodoFooter extends React.Component {
  render() {
    const nowShowing = 'all'
    const activeTodoWord = this.props.count === 1 ? 'item' : 'items'
    return (
      <footer className="footer">
					<span className="todo-count">
						<strong>{this.props.count}</strong> {activeTodoWord} left
					</span>
					<ul className="filters">
						<li>
							<a
								href="#/"
								className={classNames({selected: nowShowing === 'all'})}>
									All
							</a>
						</li>
						{' '}
						<li>
							<a
								href="#/active"
								className={classNames({selected: nowShowing === 'active'})}>
									Active
							</a>
						</li>
						{' '}
						<li>
							<a
								href="#/completed"
								className={classNames({selected: nowShowing === 'completed'})}>
									Completed
							</a>
						</li>
					</ul>
				</footer>
    )
  }
}
