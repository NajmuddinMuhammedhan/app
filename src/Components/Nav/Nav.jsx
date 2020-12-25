import { useHistory } from 'react-router-dom'
import useToken from '../../Hooks/useToken'
import useLanguage from '../../Hooks/useLanguage'

import languages from '../../Localization/languages'
import TEXT from '../../Localization/translates'

function Nav () {

	const [language, setLanguage] = useLanguage()
	const [token, setToken] = useToken()

	const { push: route } = useHistory()

	return (
		<>
			<nav>
				<ul>
					<li>
						<button onClick={() => route('/')}>
							{TEXT[language].NAV.home}
						</button>
					</li>
					<li>
						<button onClick={() => route('/about')}>
							{TEXT[language].NAV.about}
						</button>
					</li>

					<select
						defaultValue={language}
						onChange={e => setLanguage(e.target.value)}
					>
						{
							languages.map((lang, i) => <option key={i} value={lang.prop}>{lang.name}</option>)
						}
					</select>
					{
						token && (
							<li>
								<button onClick={() => route('/private')}>
									{TEXT[language].NAV.private}
								</button>
							</li>
						)
					}
					{
						!token && (
							<li>
								<button onClick={() => route('/login')}>
									{TEXT[language].NAV.login}
								</button>
							</li>
						)
					}
					{
						token && (
							<li>
								<button onClick={() => setToken(null)}>
									{TEXT[language].NAV.logout}
								</button>
							</li>
						)
					}
				</ul>
			</nav>
		</>
	)
}

export default Nav
