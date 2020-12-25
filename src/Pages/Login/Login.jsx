import useToken from '../../Hooks/useToken'

function Login () {

	const [setToken] = useToken(true)

	return (
		<>
			<button onClick={() => setToken(Math.random())}>
				Login
			</button>
		</>
	)
}

export default Login
