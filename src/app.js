/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generateRandomCard() {
    const pintas = ["♦", "♥", "♠", "♣"];
    const valores = [
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

    let simbolo = randomElement(pintas);
    let valor = randomElement(valores);

    let simboloArriba = document.getElementById("simboloArriba");
    simboloArriba.textContent = simbolo;

    let simboloAbajo = document.getElementById("simboloAbajo");
    simboloAbajo.textContent = simbolo;
    if (simbolo == "♦" || simbolo == "♥") {
      simboloAbajo.style.color = "red";
      simboloArriba.style.color = "red";
    } else {
      simboloAbajo.style.color = "black";
      simboloArriba.style.color = "black";
    }

    let valorCentro = document.getElementById("valorCentro");
    valorCentro.textContent = valor;

    function randomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  }
  generateRandomCard();
  let button = document.querySelector("#boton");
  button.addEventListener("click", generateRandomCard);
};
