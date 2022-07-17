"use strict";
const menuLinks = document.querySelectorAll('.link[data-goto]');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

if(menuLinks.length > 0){
	menuLinks.forEach(link => {
		link.addEventListener("click", gotoy);
	});
}

function gotoy(e){
	const menuLink = e.target;
	if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
		const gotoBlock = document.querySelector(menuLink.dataset.goto);
		const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

		window.scrollTo({
			top: gotoBlockValue,
			behavior: "smooth"
		});
		e.preventDefault();
		burger.classList.remove('active');
		menu.classList.remove('active');
	}
}


if(burger){
	burger.addEventListener('click', function(e){
		burger.classList.toggle('active');
		menu.classList.toggle('active');
	});
}
