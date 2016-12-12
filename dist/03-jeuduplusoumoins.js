"use strict";
/**
 * Created by Administrateur on 12/12/2016.
 */
var readline = require("readline");
var random = function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
console.time("Random");
var randomNumber = random(0, 100);
console.timeEnd("Random");
var arrayOfInputs = new Array();
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var play = function play() {
    rl.question('Enter a number? ', function (answer) {
        if (isNaN(answer)) {
            throw Error("is not a number"); // ne peut pas s'utiliser dans une callback !
        }
        ;
        if (answer == randomNumber) {
            arrayOfInputs.push("Answer: " + answer + " = " + "Random: " + randomNumber);
            console.log("Answer: " + answer + " = " + "Random: " + randomNumber);
            console.log("you win");
            arrayOfInputs.forEach(function (item, index, array) {
                console.log(item, index);
            });
            rl.close();
        }
        else if (answer > randomNumber) {
            arrayOfInputs.push("Answer: " + answer + " > " + "Random: " + randomNumber);
            console.log("Answer: " + answer + " > " + "Random: " + randomNumber);
            play();
        }
        else {
            arrayOfInputs.push("Answer: " + answer + " < " + "Random: " + randomNumber);
            console.log("Answer: " + answer + " < " + "Random: " + randomNumber);
            play();
        }
    });
};
play();
/*
rl.question('line', function (input) { //Déclanche sur un input + enter dans la console
    console.log(input);
})*/
//# sourceMappingURL=03-jeuduplusoumoins.js.map