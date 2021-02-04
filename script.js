"use strict"

window.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("Start");
    playersChoice();   
}

function playersChoice() {
    console.log("playersChoice")
    computersChoice();
}

function computersChoice() {
    console.log("computersChoice");
    showAnimation();
}

function showAnimation() {
    console.log("showAnimation");
    determineWinner();
}

function determineWinner() {
    console.log("determineWinner");
    showWinner();
}

function showWinner() {
    console.log("showWinner");
}