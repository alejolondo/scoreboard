// const saveEl = document.getElementById('save-el')

const homeScore = document.getElementById('home-score') 

const guestScore = document.getElementById('guest-score') 

let countHome = 0
let countGuest = 0

function onePoint(){
    countHome  +=  1
        homeScore.innerText = countHome 
}

function twoPoints(){
    countHome  +=  2
        homeScore.innerText = countHome 
}

function threPoints(){
    countHome  +=  3
        homeScore.innerText = countHome 
}

function onePointGuest(){
    countGuest  +=  1
        guestScore.innerText = countGuest 
}

function twoPointsGuest(){
    countGuest  +=  2
        guestScore.innerText = countGuest 
}

function threPointsGuest(){
    countGuest  +=  3
        guestScore.innerText = countGuest 
}

function newGame(){
    homeScore.textContent = countHome = 0
    guestScore.textContent = countGuest = 0
}


// function save(){
//     let saveCount = count + "  - "
//     saveEl.textContent += saveCount
//     countEl.textContent = 0
//     count = 0

// }