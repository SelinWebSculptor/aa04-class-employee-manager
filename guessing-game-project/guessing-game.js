
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });


let secretNumber;


function checkGuess(num) {
    if (Number(num) > secretNumber) {
        console.log("Too high.")
        return false;
    }
    if (Number(num) < secretNumber) {
        console.log("Too small")
        return false;
    }

    if (Number(num) === secretNumber) {
        console.log("Correct!")
        return true;
    }
}

function askGuess() {
    rl.question('Enter a guess: ', (answer) => {
        let res = checkGuess(answer)
        if (res) {
            console.log("You win!")

            rl.close();

        }   else {
            askGuess();
        }
    });

}
function randomInRange(min, max){
    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min);
}

function askRange() {
    rl.question("Enter a min number: ", min =>  {

        rl.question("Enter a max number: ", max => {

            console.log("I'm thinking of a number between", + min + " and " + max)

                secretNumber = randomInRange(Number(min), Number(max))
                    askGuess()

        }) ;
    })
}


askRange()
