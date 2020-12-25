import { Switch } from 'react-router-dom'

import Public from './Components/Router/Public'
import Private from './Components/Router/Private'

import Nav from './Components/Nav/Nav'

import HomePage from './Pages/Home/Home'
import AboutPage from './Pages/About/About'
import LoginPage from './Pages/Login/Login'
import TodosPage from './Pages/Todos/Todos'

function App () {

	return (
		<>
			<Nav />

			<Switch>
				<Public path="/" component={HomePage} exact />
				<Public path="/about" component={AboutPage} exact />
				<Public path="/login" component={LoginPage} exact />
				
				<Private path="/private" component={TodosPage} exact />
			</Switch>
		</>
	)
}

export default App
