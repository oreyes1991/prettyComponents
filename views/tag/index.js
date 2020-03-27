
function onSelect(selected, that, ev) {
	if (selected) {
		alert('Select ' + that.name)
	} else {
		alert('Unselect ' + that.name)
	}
}


let tArr = ['Close 1', 'Close 2', 'Close 3'];

function writeTags() {
	const box = document.querySelector('.dynamic-tags');
	box.innerHTML = '';
	tArr.forEach(t => {
		const newEl = document.createElement('pretty-tag');
		newEl.value = t;
		newEl.isCloseable = true;
		newEl.onClose = onCloseCallback;
		box.appendChild(newEl)
	})
}



function onCloseCallback(el, that, ev) {
	console.log(el, that.name);
	const index = tArr.indexOf(that.name);
	tArr.splice(index, 1);
	writeTags();
}

writeTags();
