import { useEffect, useState } from 'react'

import Loader from '../../Components/Loader/Loader'

function Todos () {

	const [todos, setTodos] = useState({
		loading: true,
		error: null,
		data: [],
	})

	useEffect(() => {

		;(async function () {

			try {

				const response = await fetch('https://jsonplaceholder.typicode.com/todos')
				const json = await response.json()

				setTodos(todos => {
					return {
						...todos,
						loading: false,
						data: json,
					}
				})
			}
			catch(e) {
				setTodos(todos => {
					return {
						...todos,
						error: e,
					}
				})
			}

		})()

	}, [])

	return (
		<>
			{
				!todos.error && todos.loading && <Loader />
			}
			{
				todos.error && <>{todos.error.message}</>
			}
			{
				todos.data.length > 0 && (
					<ol>
						{
							todos.data.map(todo => <li key={todo.id}>{todo.title}</li>)
						}
					</ol>
				)
			}
		</>
	)
}

export default Todos
