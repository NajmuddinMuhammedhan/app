import { createContext, useState, useEffect } from 'react'

const Context = createContext(null)

const Provider = ({ children }) => {

	const [state, setState] = useState(window.localStorage.getItem('language') || 'en')

	useEffect(() => {

		if (state) {
			window.localStorage.setItem('language', state)
		}
		else {
			window.localStorage.removeItem('language')
		}

	}, [
		state,
	])

	return (
		<Context.Provider value={{ state, setState }}>
			{children}
		</Context.Provider>
	)
}

export {
	Context,
	Provider,
}
