/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["aliens", "donkeys", "barbarians"];
  let actions = ["vaporized", "dissolved", "maimed"];
  let what = ["my wife", "my work", "my therapist"];
  let when = ["a minute ago", "last night", "this morning"];
  let sentence = who[0] + " " + actions[0] + " " + what[0] + " " + when[0];
  let element = document.getElementById("excuse");
  element.innerHTML = sentence;
};
