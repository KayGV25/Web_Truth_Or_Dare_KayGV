import {Truth, Dare} from "./Lists.js"
let deck = []
let min_length = Math.min(Truth.length,Dare.length);
let current = -1;
for(var i=0; i<min_length; i++){
    deck.push(i);
}

function Display(current){
    var q_Truth = Truth[current];
    var q_Dare = Dare[current];
    var truth = document.getElementById("truth");
    var dare = document.getElementById("dare");
    truth.innerHTML = q_Truth;
    dare.innerHTML = q_Dare;

}
function Next(){
    current++;
    Display(current);
}
function Back(){
    if(current>0){
        current--;
        Display(current);
    }
}
function Shuffle(){
    console.log(deck);
    for(var i=min_length-1; i>=0; i--){
        var randomIndex = Math.floor(Math.random()*1000 % min_length);
        [deck[i], deck[randomIndex]] = [deck[randomIndex], deck[i]];
    }
    console.log(deck)
}

document.getElementById("Shuffle").addEventListener("click", Shuffle);
document.getElementById("Next").addEventListener("click", Next);
document.getElementById("Back").addEventListener("click", Back);