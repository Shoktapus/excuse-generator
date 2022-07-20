/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "Aliens",
    "Cyborgs",
    "Supes",
    "An Extinction Level Event",
    "Sharks With Lasers"
  ];
  let actions = ["vaporized", "dissolved", "maimed", "liquefied", "atomized"];
  let what = ["my wife", "my work", "my therapist", "my truck", "my apartment"];
  let when = [
    "a minute ago",
    "last night",
    "this morning",
    "yesterday",
    "just now"
  ];

  function getRandomNum(array) {
    return Math.floor(Math.random() * array.length);
  }
  let whoIndex = getRandomNum(who);
  let actionsIndex = getRandomNum(actions);
  let whatIndex = getRandomNum(what);
  let whenIndex = getRandomNum(when);
  let sentence =
    who[whoIndex] +
    " " +
    actions[actionsIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex] +
    ".";

  let element = document.getElementById("excuse");
  element.innerHTML = sentence;
};
