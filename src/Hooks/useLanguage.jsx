import { useContext } from 'react'

import { Context } from '../Context/Language'

const useLanguage = (setterOnly) => {

	const ctx = useContext(Context)

	return setterOnly ? [ctx.setState] : [ctx.state, ctx.setState]
}

export default useLanguage
