const btnShowModal = document.querySelectorAll(".show-modal");
const  btnCloseModal = document.querySelector(".close-modal");
const overlay =  document.querySelector('.overlay');
const modal = document.querySelector('.modal');


const openModel = function () {
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");
}

const closeModel = function () {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
}
for (let i=0; i <btnShowModal.length; i++)
    btnShowModal[i].addEventListener(
        'click', openModel
    )


btnCloseModal.addEventListener(
    'click', closeModel
)
overlay.addEventListener(
    'click', closeModel
)