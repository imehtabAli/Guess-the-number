const numberInput = document.getElementById('numberInput');
const submit = document.getElementById('submit');
const reset = document.getElementById('reset');
const resultMessage = document.getElementById('resultMessage');
const guesses = document.getElementById('guesses');

// random number generator
let randomNumber = Math.floor(Math.random() * 100) + 1;

// will count the attempts made to guess the number
let attempts = 0;

reset.disabled = true; // reset true

submit.disabled = true;
numberInput.addEventListener('input', () => {
    submit.disabled = numberInput.value === '';
});



// button function to guess the number

submit.addEventListener('click', ()=>{
    attempts++;
    let userGuess = numberInput.value;
    guesses.textContent += `${userGuess} `;

    if (userGuess < 0 || userGuess > 100) {
        numberInput.value = '';
        resultMessage.textContent = "Please enter a number between 0 and 100.";
    }

    else if(userGuess < randomNumber){
        numberInput.value = '';
        resultMessage.textContent = "Too Low!";
    }

    else if(userGuess > randomNumber){
        numberInput.value = '';
        resultMessage.textContent = "Too High!";
    }

    else if(userGuess == randomNumber){
        resultMessage.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        submit.disabled = true; // when guessed, submit button will not work anymore
        reset.disabled = false; // reset false
    }

});


// reset button function

reset.addEventListener('click', ()=>{
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    numberInput.value = '';
    resultMessage.textContent = '';
    guesses.textContent = 'Your guesses: ';
    reset.disabled = true; // reset true
});
