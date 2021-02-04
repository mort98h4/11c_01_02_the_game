"use strict"

let player;
let computer;

window.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("Start");

    let rock = document.querySelector(".rock");
    let paper = document.querySelector(".paper");
    let scissors = document.querySelector(".scissors");

    rock.dataset.id = 0;
    paper.dataset.id = 1;
    scissors.dataset.id = 2;

    rock.addEventListener("click", playersChoice);
    paper.addEventListener("click", playersChoice);
    scissors.addEventListener("click", playersChoice);

    // playersChoice();   
}

function playersChoice() {
    console.log("playersChoice")
    console.log(this.dataset.id);

    player = this.dataset.id;

    computersChoice();
}

function computersChoice() {
    console.log("computersChoice");

    computer = Math.floor(Math.random() * 3);
    console.log(computer);
    
    showAnimation();
}

function showAnimation() {
    console.log("showAnimation");
    determineWinner();
}

function determineWinner() {
    console.log("determineWinner");

    if (player == 0 && computer == 0 || player == 1 && computer == 1 || player == 2 && computer == 2) {
        console.log("It's a draw");
        showWinner();
    } else if (player == 0 && computer == 2 || player == 1 && computer == 0 || player == 2 && computer == 1) {
        console.log("Player wins");
        showWinner();
    } else if (player == 0 && computer == 1 || player == 1 && computer == 2 || player == 2 && computer == 0) {
        console.log("Computer wins");
        showWinner();
    }
}

function showWinner() {
    console.log("showWinner");
}