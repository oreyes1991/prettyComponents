export function validateStructure(that) {
	const children = that.children
	if (children.length > 1) {
		console.log(children)
		let child = '';
		for(let i=0; i < children.length; i++) {
			if (i !== 0) {
				child += children[i].outerHTML
			}
		}
		that.body = child;
		that.innerHTML = that.render();
		that.addListeners();
	}
}

export function getBody(that, empty) {
	if (empty && that.children.length === 0) {
		return '';
	}
	const b = that.innerHTML;
	that.innerHTML = '';
	return b;
}