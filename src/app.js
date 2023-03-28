/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function(randomCard) {
  const pintas = ["♦", "♥", "♠", "♣"];
  const valores = ["A", "J", "Q", "K"];

  const simbolo = randomCard(pintas);
  const valor = randomCard(valores);

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

  function randomCard(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
};
