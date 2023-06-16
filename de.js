// INSERT JS HERE


// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_container = document.querySelector('.social-container');

floating_btn.addEventListener('click', () => {
	social_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_container.classList.remove('visible')
});