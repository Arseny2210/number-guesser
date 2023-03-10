const min = 1, max = 3,
    randomNum = Math.floor(Math.random() * (max - min + 1) + min),
    ipnutNumber = document.querySelector('#number'),
    btn = document.querySelector("#btn");

let lives = 3,
    message = document.querySelector('#text');

document.querySelector('#min').textContent = min;
document.querySelector('#max').textContent = max;


const showMessage = (text, style) => {
    message.textContent = text;
    message.classList.add(style);
};



const playAgain = (clazz) => {
    ipnutNumber.disabled = true;
    btn.textContent = "PLAY AGAIN";
    btn.addEventListener('click', () => {
        window.location.reload();
    });
    ipnutNumber.classList.add(clazz);
};

btn.addEventListener('click', () => {
    if (ipnutNumber.value == '') {
        showMessage(`You type empty value.`, `danger`);
    } else if (ipnutNumber.value < min || ipnutNumber.value > max) {
        showMessage(`Input a number between ${min} and ${max}`, `danger`);
    } else if (ipnutNumber.value == randomNum) {
        playAgain('win');
        showMessage(`You win! The winning number is ${randomNum}`, `success`);
    } else if (lives != 1 && ipnutNumber.value != randomNum) {
        lives--;
        showMessage(`${ipnutNumber.value} is not correct! You have ${lives} guesses left`, `danger`);
    } else if (lives == 1) {
        playAgain('lose');
        lives--;
        showMessage(`You lose. The correct answer was ${randomNum}`);
    }
});
