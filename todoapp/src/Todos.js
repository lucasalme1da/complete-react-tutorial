import React from 'react'

export default ({ todos, deleteTodo }) => {

	const todoList = todos.length ? (
		todos.map(todo => {
			return (
				<div className="collection-item" key={todo.id}>
					<span style={{ cursor: 'pointer' }} onClick={() => { deleteTodo(todo.id) }}>{todo.content}</span>
				</div>
			)
		})
	) : (
			<p className="center">You have no todos left :D</p>
		)

	return (
		<div className="todos collection">
			{todoList}
		</div>
	)
}