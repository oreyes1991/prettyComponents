export function validateStructure(that, contentClass) {
	const children = that.children;
	let chld = '';
	if (that.childElementCount > 1) {
		for(let i=0; i < that.childElementCount; i++) {
			if (i !== 0) {
				chld += children[i].outerHTML;
				that.removeChild(children[i])
			}
		}
		that.querySelector(contentClass).innerHTML = chld;
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