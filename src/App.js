import Drawing from './script/Drawing.js'

class S {
	constructor(el) {
		let action = window.location.href
		let i = action.indexOf('?a=')

		Drawing.init(el)

	}
}


export default S