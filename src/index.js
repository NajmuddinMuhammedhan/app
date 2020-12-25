import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider as Authentication } from './Context/Authentication'
import { Provider as Language } from './Context/Language'

ReactDOM.render(
  <React.StrictMode>
  	<BrowserRouter>
      <Authentication>
        <Language>
   		    <App />
        </Language>
      </Authentication>
  	</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

/*
	+ Routing
	+ Authentication
	+ Localization
	Themes
*/
