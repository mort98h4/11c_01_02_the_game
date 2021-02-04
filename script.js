"use strict"

let player;
let computer;
let win = document.querySelector("#win");
let draw = document.querySelector("#draw");
let lose = document.querySelector("#lose");
let play = document.querySelector("#play");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

window.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("Start");

    win.classList.add("hidden");
    draw.classList.add("hidden");
    lose.classList.add("hidden");
    play.classList.add("hidden");

    rock.dataset.id = 0;
    paper.dataset.id = 1;
    scissors.dataset.id = 2;

    play.removeEventListener("click", start);
    rock.addEventListener("click", playersChoice);
    paper.addEventListener("click", playersChoice);
    scissors.addEventListener("click", playersChoice);

    // playersChoice();   
}

function playersChoice() {
    console.log("playersChoice")
    rock.removeEventListener("click", playersChoice);
    paper.removeEventListener("click", playersChoice);
    scissors.removeEventListener("click", playersChoice);
    
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
        draw.classList.toggle("hidden");
        play.classList.toggle("hidden");
        play.addEventListener("click", start);
    } else if (player == 0 && computer == 2 || player == 1 && computer == 0 || player == 2 && computer == 1) {
        console.log("Player wins");
        win.classList.toggle("hidden");
        play.classList.toggle("hidden");
        play.addEventListener("click", start);
    } else if (player == 0 && computer == 1 || player == 1 && computer == 2 || player == 2 && computer == 0) {
        console.log("Computer wins");
        lose.classList.toggle("hidden");
        play.classList.toggle("hidden");
        play.addEventListener("click", start);
    }
}