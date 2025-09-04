// disse variablene starter på verdien 0
let firstNumber = 0;
let secondNumber = 0;
let points = 0;


function startGame() {
    /* denne kjører reset game når man trykker på knappen "start", og
    setter inn et tall på firstNumber og et på secondNumber */
    resetGame();
}

function resetGame() {
    // gjør firstNumber og secondNumber lik getRandomNumber funksjonen
    // dette
    firstNumber = getRandomNumber();
    secondNumber = getRandomNumber();
    /*endrer innerHTML til div'ene i html til firstNumber og secondNumber
     til det tilfeldige tallet som lages av getRandomNumber*/
    document.getElementById("firstNumber").innerHTML = firstNumber;
    document.getElementById("secondNumber").innerHTML = secondNumber;
    // endrer input sin value til en tom string
    // det man skrev inn i inputen blir borte, og man kan skrive inn et nytt tegn
    document.getElementById("userInput").value = "";
}

function getRandomNumber() {
    // denne lager et random tall mellom 1 og 10
    return Math.round(Math.random() * 10);
}

function submitAnswer() {
    // lager en variabel for å lagre svaret man skriver inn i input
    let answer = document.getElementById("userInput").value
    // lager en variabel for 
    let correct;

    // denne sjekker om man legger inn rett svar
    // denne sier:
    /* om firstNumber er større enn secondNumber, så er det rette svaret 
    å putte inn > */
    if (firstNumber > secondNumber) {
        correct = ">";
    /* om firstNumber er mindre enn secondNumber, så er det rette svaret 
    å putte inn < */
    } else if (firstNumber < secondNumber) {
        correct = "<";
    /* ellers så er det riktige svaret = */
    } else {
        correct = "=";
    }

    // denne sjekker om answer er rett eller feil
    // er varet rett, så får man et poeng, er svaret feil får man minus 1
    if (answer === correct) {
        // ponits++ legger til en
        points++;
    } else {
        // ponits-- trekker fra en
        points--;
    }
    
    /* man trykker på reset og kjører funksjonen, så endrer denne ponitsDIv
    sin innerHTML til å si "Your ponits:" pluss antall poeng du fikk
    denne runden */
    document.getElementById("pointsDiv").innerHTML = "Your points:" + points;
    // denne gjør det samme som i resetGame og endrer input sin value når man trykker på knappen
    document.getElementById("userInput").value = "";
}
