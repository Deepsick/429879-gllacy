var popup = document.querySelector(".modal-feedback");
var modalOverlay = document.querySelector(".modal-overlay");
var buttonClose = document.querySelector(".modal-feedback-close");
var buttonOpen = document.querySelector(".contacts-button");

var form = popup.querySelector("form");
var nameInput = popup.querySelector("[name = name]");
var emailInput = popup.querySelector("[name = email]");
var messageInput = popup.querySelector("[name = message]");

buttonOpen.addEventListener("click", function(e) {
	e.preventDefault();
	popup.classList.add("modal-show");
	popup.classList.add("modal-bounce");
	modalOverlay.classList.add("modal-show");
	nameInput.focus();
});

buttonClose.addEventListener("click", function(e) {
	e.preventDefault();
	popup.classList.remove("modal-show");
	modalOverlay.classList.remove("modal-show");
	popup.classList.remove("modal-bounce");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(e) {
	if ( !nameInput.value || !emailInput.value || !messageInput.value) {
		e.preventDefault();
		popup.classList.add("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");	
	}  
});

window.addEventListener("keydown", function(e) {
	if (e.keyCode === 27) {
		e.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			modalOverlay.classList.remove("modal-show");
			popup.classList.remove("modal-error");
			popup.classList.remove("modal-bounce");
		}
	}
});


