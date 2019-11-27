const BASE_URL = "https://codepen.io/osszzyy/pen/";

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.example').forEach(ex => {
		ex.addEventListener('click', () => {
			redirect(ex.classList[1]);
		})
	})
})

function redirect(code) {
	window.open(BASE_URL + code,'_blank');
}