'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

console.log(btnsOpenModal);

for(let i = 0; i < btnsOpenModal.length; i++) {
    console.log(btnsOpenModal[i].addEventListener("click", function() {
        console.log("Button Clicked");
        modal.classList.remove("hidden")
    }));
}

