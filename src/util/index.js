/**
 * get inner html and cleaned from a component
 * @param {HTMLElement} that 
 * @param {Boolean} empty 
 */
export function getBody(that, empty) {
	if (empty && that.children.length === 0) {
		return '';
	}
	const b = that.innerHTML;
	that.innerHTML = '';
	return b;
}
/**
 * 
 * @param {HTMLElement} that 
 */
export function getProps(that) {
	let r = {};
	const attrs = that.attributes
	for (let i = 0; i < attrs.length; i++) {
		let att = attrs[i];
		let attName = convertToCamelCase(att.name);
		r[attName] = att.value === '' ? true : att.value; //if empty is a boolean prop
	}
	return r;
}
/**
 * Convert attribute names from kebab case to camel case
 * @param {String} str 
 */
function convertToCamelCase(str) {
	let temp = str.split('-');
	if(temp.length > 1) {
		return temp.map((el, i) => {
			if (i === 0) return el
			return capitalize(el);
		}).join('')
	}
	return str
}


/**
 * Capitalize the first letter of any text given
 * @param {String} str 
 */
function capitalize(str) {
	return str.replace(new RegExp(`^${str[0]}`), str[0].toUpperCase());
}