/* eslint-disable */
import "bootstrap";
import "./style.css";

let generateCard = () => {
  let character = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  return character[Math.floor(Math.random() * character.length)];
};

let generateSymbol = () => {
  let figure = ["corazones", "diamantes", "pica", "trebol"];
  let figureIndex = Math.floor(Math.random() * figure.length);
  return figure[figureIndex];
};

let symbol = generateSymbol();
let number = generateCard();

document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".card").classList.remove(`${symbol}`);
  symbol = generateSymbol();
  number = generateCard();

  document.querySelector(".card").classList.add(`${symbol}`);
  document.querySelector(".card").innerHTML = `${number}`;
});

window.onload = () => {
  document.querySelector(".card").classList.add(symbol);
  document.querySelector(".card").innerHTML = number;
};
