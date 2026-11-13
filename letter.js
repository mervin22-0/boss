
let isOpen = false;

function toggleLetter() {

    const envelope = document.getElementById("envelope");
    const button = document.getElementById("openBtn");
    const letter = document.getElementById("letter");

    isOpen = !isOpen;

    if (isOpen) {

        envelope.classList.add("open");
        button.textContent = "Close Letter ❤️";

    } else {

        envelope.classList.remove("open");
        button.textContent = "Open Letter ❤️";

        letter.scrollTop = 0;

    }
}
