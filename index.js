let max = 11;
let firstcard = randomInt(max);
let secondcard = randomInt(max);
let cardsArray = [firstcard, secondcard]
let sum = firstcard + secondcard;
let blackjack = false;
let haslost = false;
let msg = "";
let msgel = document.getElementById("display-msg");
let cardsel = document.getElementById("cards");
let sumel = document.getElementById("sum");
let cardString = "";
let isActive = false;
let playerel = document.getElementById("balance");
let player = {
    playerName: "Josh",
    playerBalance: 200
}
playerel.textContent = player.playerName + ": $" + player.playerBalance;

function randomInt(num) {
    return Math.floor(Math.random() * num) + 2;
}

function startgame() {
    if (isActive) {
        return;
    }

    if (player.playerBalance <= 0) {
        return;
    }
    // Initialize all variables for new round:
    firstcard = randomInt(max);
    secondcard = randomInt(max);
    cardsArray = [firstcard, secondcard]
    sum = firstcard + secondcard;
    blackjack = false;
    haslost = false;
    msg = "";
    cardsel.textContent = "Cards:";
    sumel.textContent = "Sum:";
    cardString = "";
    sumel.textContent += " " + sum;
    player.playerBalance -= 20;
    isActive = true;
    checkscore();
}

function newcard() {
    if (isActive) {
        let thirdcard = randomInt(max);
        cardsArray.push(thirdcard);
        sum += thirdcard;
        sumel.textContent = "Sum: " + (sum);
        checkscore();
    }
}

function checkscore() {
    cardString = "";
    for (let i = 0; i < cardsArray.length; i++) {
        cardString += " " + cardsArray[i];
    }

    cardsel.textContent = "Cards:" + cardString;
    playerel.textContent = player.playerName + ": $" + player.playerBalance;

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
        player.playerBalance += 40;
        playerel.textContent = player.playerName + ": $" + player.playerBalance;
        endGame()
    }

    if (haslost) {
        isActive = false;
        // end game.
        endGame()
    }
}

function endGame() {
    sleep(3000).then(() => {
        msgel.textContent = "Want to play a round?";
        cardsel.textContent = "Cards:";
        sumel.textContent = "Sum:";
        sum = 0;
        cardsArray = []
        })
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}