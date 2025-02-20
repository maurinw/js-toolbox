const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = document.getElementById("userGuess").value;
    let message = document.getElementById("message");
    
    if (!userGuess) {
        message.textContent = "Please enter a number!";
        return;
    }

    userGuess = Number(userGuess);
    attempts++;

    if (userGuess < secretNumber) {
        message.textContent = "Too low! Try again.";
    } else if (userGuess > secretNumber) {
        message.textContent = "Too high! Try again.";
    } else {
        message.textContent = `Correct! You guessed it in ${attempts} attempts.`;
        document.getElementById("userGuess").disabled = true;
    }
}
