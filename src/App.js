class S {

	constructor(name, color) {
		this.name = name;
		this.color = color;
	}

	toString(){
		document.querySelector("#root").innerHTML = 'name:' + this.name + ',color:' + this.color
		console.log(this.prop)
	}
}


export default S