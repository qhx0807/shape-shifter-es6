import Drawing from './script/Drawing.js'

class S {
	constructor(name, color) {
		this.name = name;
		this.color = color;
	}

	toString(){
		document.querySelector("#root").innerHTML = 'name:' + this.name + ',color:' + this.color
	}

	test(){
		Drawing.toArr()
	}
}


export default S