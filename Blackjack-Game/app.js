let player = {
    name: "Sun",
    chips: 200
}
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if ( randomNumber > 10 ) {
        return 10;
    }else if ( randomNumber === 1 ) {
        return 11;
    }else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstcard = getRandomCard();
    let secondcard = getRandomCard();
    cards = [firstcard, secondcard];
    sum = firstcard + secondcard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards : ";
    for ( let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " , ";
    }
    sumEl.textContent = "Sum: " + sum;
    if ( sum <= 20 ) {
        message = "Do you want to draw a new card ?";
        messageEl.style.color = "#F6FFA6";
        sumEl.style.color = "#F6FFA6";
    }else if ( sum === 21 ) {
        message = "Congratulations. You're winner."
        hasBlackjack = true;
        messageEl.style.color = "#A4BC92";
        sumEl.style.color = "#A4BC92";

    }else {
        message = "You're loser";
        isAlive = false;
        messageEl.style.color = "#FD8A8A";
        sumEl.style.color = "#FD8A8A";
    }
    messageEl.textContent = message;
}

function newCard() {
    if ( isAlive === true && hasBlackjack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame();
    }
    
}

