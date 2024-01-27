// Строгий режим
"use strict"


/*-----кнопка-------------javascript-----СПОЙЛЕР-------------------------------------------------------*/

document.addEventListener("click", documentActions);

function documentActions(e) {
	const targetElement = e.target;


	if (targetElement.closest('[data-spoller]')) {
		const currentElement = targetElement.closest('[data-spoller]');
		currentElement.classList.toggle('active');
		currentElement.nextElementSibling.hidden = !currentElement.nextElementSibling.hidden;
	}
}

const spollers = document.querySelectorAll('[data-spoller]');

if (spollers.length) {
	spollers.forEach(spoller => {
		spoller.nextElementSibling.hidden = true;
	});
}


/*-----кнопка-------------javascript-----СПОЙЛЕР-------------------------------------------------------*/
