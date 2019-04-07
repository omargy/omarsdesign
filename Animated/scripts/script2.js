const hero = document.querySelector("#hero");

const moveT = document.getElementById("move30");
moveT.addEventListener("click", addmove30);

function addmove30() {


    hero.classList.toggle("move30");
    console.log(hero);
};
/*one jump animation*/
const onejumpbtn = document.getElementById("oneJump");
onejumpbtn.addEventListener("click", oneJumpF);

function oneJumpF() {
    hero.classList.toggle("oneJump");
    console.log(hero);
};

/*jumping animation*/
const jumpingbtn = document.getElementById("jumping");
jumpingbtn.addEventListener("click", jumpingT);

function jumpingT() {
    hero.classList.toggle("jumping");
    console.log(hero);
};

/*glowing animation*/
const glowbtn = document.getElementById("glow");
glowbtn.addEventListener("click", glowT);

function glowT() {
    hero.classList.toggle("glow");
    console.log(hero);
};

/* move animation*/
const moveBtn = document.getElementById("move");
moveBtn.addEventListener("click", move);

function move() {
    hero.classList.toggle("move");
    console.log(hero);
};

/* move from 30 animation*/
const from30Btn = document.getElementById("from30");
from30Btn.addEventListener("click", moveFrom30T);

function moveFrom30T() {
    hero.classList.toggle("from30");
    console.log(hero);
};

/* Fade animation*/
const fadeBtn = document.getElementById("fade");
fadeBtn.addEventListener("click", fadeT);

function fadeT() {
    hero.classList.toggle("fade");
    console.log(hero);
};

/*Fall down animation */
const fallBtn = document.getElementById("fall");
fallBtn.addEventListener("click", fallT);

function fallT() {
    hero.classList.toggle("fall");
    console.log(hero);
};

/*shake animation*/
const shakeBTN = document.getElementById("shake");
shakeBTN.addEventListener("click", shakeT);

function shakeT() {
    hero.classList.toggle("shake");
    console.log(hero);
}

/*mirror effect*/
const mirrorBTN = document.getElementById("mirror");
mirrorBTN.addEventListener("click", mirrorT);

function mirrorT() {
    hero.classList.toggle("mirror");
    console.log(hero);
}
