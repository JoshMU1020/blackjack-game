let max = 11
let firstcard = randomInt(max);
let secondcard = randomInt(max);
let sum = firstcard + secondcard;
let blackjack = false;
let haslost = false;
let msg = "";
let msgel = document.getElementById("display-msg");
let cardsel = document.getElementById("cards");
let sumel = document.getElementById("sum");

function randomInt(num) {
    return Math.floor(Math.random() * num) + 2;
}

function startgame() {
    // Initialize all variables for new round:
    firstcard = randomInt(max);
    secondcard = randomInt(max);
    sum = firstcard + secondcard;
    blackjack = false;
    haslost = false;
    msg = "";
    cardsel.textContent = "Cards:";
    sumel.textContent = "Sum:";

    cardsel.textContent += " " + firstcard + ", " + secondcard;
    sumel.textContent += " " + sum;

    checkscore()
}

function newcard() {
    let thirdcard = randomInt(max);
    sum += thirdcard
    sumel.textContent = "Sum: " + (sum);
    checkscore()
}

function checkscore() {
    if (sum <= 20) {
        msg = "Do you want to draw a new card?";
    } else if (sum === 21) {
        msg = "You've got Blackjack!";
        blackjack = true;
    } else {
        msg = "You're out of the game!";
        haslost = true;
    }

    msgel.textContent = msg;

    if (blackjack) {
        // Cash out winner!
    
    }

    if (haslost) {
        // end game.
        sleep(3000).then(() => {
        msgel.textContent = "Want to play a round?";
        cardsel.textContent = "Cards:";
        sumel.textContent = "Sum:";
        })
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}