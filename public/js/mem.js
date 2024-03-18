const cards = document.querySelectorAll('.thecard')

let hasFlipped = false,
lockBoard = false,
firstCard, secondCard

function flipCard(){
    if(lockBoard) return
if(this === firstCard) return

    this.classList.add('flip')

    if(!hasFlipped){
        hasFlipped = true
        firstCard = this
return
        
    } 
        hasFlipped = false
        secondCard = this

        checkMatch()
       
}

function checkMatch(){
let isMatch = firstCard.dataset.animal === secondCard.dataset.animal

isMatch ? disableCards() : flipCards()

}

function disableCards(){
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)

    resetBoard()
}

function flipCards(){
    lockBoard = true
    setTimeout(()=>{
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        lockBoard = false
    }, 1500)
}

function resetBoard(){
    [hasFlipped, lockBoard] = [false,false]
    [firstCard, secondCard] = [null, null]
}

(function shuffle(){
    cards.forEach(card =>{
        let rand = Math.floor(Math.random()*12)
        card.style.order = rand
    })
})()

cards.forEach(card => card.addEventListener(('click'), flipCard))

