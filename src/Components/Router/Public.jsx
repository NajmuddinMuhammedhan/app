import { Route, Redirect, useLocation } from 'react-router-dom'
import useToken from '../../Hooks/useToken'

function Public ({ children, ...props }) {

	const { pathname } = useLocation()

	const [token] = useToken()

	if (token && pathname === '/login') {
		return <Redirect to="/" />
	}

	return (
		<Route {...props} />
	)
}

export default Public
