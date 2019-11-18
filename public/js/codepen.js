const BASE_URL = "https://codepen.io/osszzyy/pen/";

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.example').forEach(ex => {
		ex.querySelector('i').addEventListener('click', () => {
			redirect(ex.classList[1]);
		})
	})
})

function redirect (code) {
	switch (code) {
		case 'btn':
			window.open(BASE_URL + 'QWWaVBv','_blank');
			break;
		case 'ddw':
			window.open(BASE_URL + 'Yzzvoay','_blank');
			break;
		case 'inp':
			window.open(BASE_URL + 'WNNyqzX','_blank');
			break;
		case 'tag':
			window.open(BASE_URL + 'qBBLmXO', '_blank')
		default:
			window.open(BASE_URL + 'QWWaVBv','_blank');
			break;
	}
}