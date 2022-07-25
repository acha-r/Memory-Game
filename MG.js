const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    }

]
cardArray.sort(() => 0.5 - Math.random())


const gridDisplay = document.querySelector('#grid')         //the div element in html
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardChosenId = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')         //doc.createEle is a javascript code to create an html element. in this case, the image element
        card.setAttribute('src', 'images/blank.png')       // adds an attribute to the html element created. in this case src = images/blank.png is the attribute.
        card.setAttribute('data-id', i)                    //can be more than one attribute. i is from the for loop
        card.addEventListener('click', flipCard)           // the flipCard fuction is not called (absence of () after it) so it doesn't execute immediately whether there is a click or not

        gridDisplay.appendChild(card)

    }
}

createBoard();


function checkMatch() {
    const cards = document.querySelectorAll("img")
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId[1]

    if (optionOneId == optionTwoId) {

        alert("You've clicked the same card. Pick another")
        cardChosen[0] = []
        cardChosen[1] = []
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
    }

    if (cardChosen[0] == cardChosen[1]) {
        alert("Your cards match!")
        cards[optionOneId].setAttribute('src', 'images/white.png') //if the cards match, they are replaced with the white picture
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert("No match. Try again")
    }
    resultDisplay.innerHTML = cardsWon.length

    cardChosen = [];
    cardChosenId = [];

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.innerHTML = "Well done. You found all the cards!"
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');                   //"this" allows particular focus on whatever was clicked. So its value depends on whatever was clicked.

    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)


    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 500)             //setTimeOut is an inbuilt method
    }
}














