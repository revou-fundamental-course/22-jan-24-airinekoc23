
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const button = document.getElementById('button-kirim');

button.addEventListener('click', function () {
    let nama = inputName.value;
    let email = inputEmail.value;

    if (!nama) {
        const nameError = document.getElementById('name-error');
        nameError.classList.add('error-message');

        nameError.innerText = "Silahkan Isi Nama Terlebih Dahulu!"
    }

    if (!email) {
        const emailError = document.getElementById('email-error');
        emailError.classList.add('error-message');

        emailError.innerText = "Silahkan Isi Email Terlebih Dahulu!"
    }
})

let currentIndex = 0;

// declaire variabel to Control Slides
const totalSlides = document.querySelectorAll('.slide').length;
const slideWidth = document.querySelector('.slide').clientWidth;
const slideContainer = document.getElementById('slides')

function nextSlide() {
    currentIndex = (currentIndex + 2) % totalSlides;
    updateSlide();
}

function updateSlide() {
    slideContainer.style.transform = 'translateX ($(-currenIndex *  slideWidth)px'
}

setInterval(nextSlide, 2500);

