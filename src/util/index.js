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
		r[att.name] = att.value;
	}
	return r;
}