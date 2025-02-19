console.log("JavaScript is linked!");

const main_image = document.querySelector("#main-img");
const left_button = document.querySelector("#left-btn");
const right_button = document.querySelector("#right-btn");

let image = 1;

function setButton() {
    left_button.disabled = (image === 1);
    right_button.disabled = (image === 3);
}

setButton();

left_button.addEventListener("click", () => {
    if (image > 1) {
        image = image - 1;
        main_image.src = "./assets/image_" + image + ".jpg";
    }

    setButton();
});

right_button.addEventListener("click", () => {
    if (image < 3) {
        image = image + 1;
        main_image.src = "./assets/image_" + image + ".jpg";
    }

    setButton();
});