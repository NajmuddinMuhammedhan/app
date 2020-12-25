import { Route, Redirect } from 'react-router-dom'
import useToken from '../../Hooks/useToken'

function Private ({ children, ...props }) {

	const [token] = useToken()

	if (!token) {
		return <Redirect to="/login" />
	}

	return (
		<Route {...props} />
	)
}

export default Private
