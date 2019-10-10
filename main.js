let toggleNavStatus = false;



const toggleNav = function() {
  let getDropDown = document.querySelector(".nav-drop-down");
  let getDropDownUL = document.querySelector(".nav-drop-down ul");
  let getDropDownDivs = document.querySelectorAll(".nav-drop-down div");

  if (toggleNavStatus === false) {
    getDropDownUL.style.visibility = "visible";

    let arrayLength = getSideBarDivs.length;
    for (i = 0; i < arrayLength; i++) {

    }
    toggleNavStatus = true;
  } 

}

let redBtn = document.getElementById('red');
let orangeBtn = document.getElementById('orange');
let purpleBtn = document.getElementById('purple');
let greenBtn = document.getElementById('green');

redBtn.addEventListener("click", function(event) {
  document.body.style.backgroundColor = "red";
});

orangeBtn.addEventListener("click", function(event) {
  document.body.style.backgroundColor = "orange";
});

purpleBtn.addEventListener("click", function(event) {
  document.body.style.backgroundColor = "purple";
});

greenBtn.addEventListener("click", function(event) {
  document.body.style.backgroundColor = "green";
});