const son1 = document.querySelector('.son1');
const son2 = document.querySelector('.son2');
const amal = document.querySelector('.amal');
const javoblar = document.querySelectorAll('.javob');
let correct = 0;

function randnum() {
    let rand = Math.floor(Math.random() * 10) + 1;
    let rand1 = Math.floor(Math.random() * 10) + 1;
    son1.textContent = rand;
    son2.textContent = rand1
}

function randamal() {
    let amals = ["*", "+", "-"];
    let rand = Math.floor(Math.random() * amals.length)
    amal.textContent = amals[rand]
}

function answers() {
    let num1 = +son1.textContent;
    let num2 = +son2.textContent;
    if (amal.textContent == "*") correct = num1 * num2;
    if (amal.textContent == "+") correct = num1 + num2;
    if (amal.textContent == "-") correct = num1 - num2;
    return correct
}

function joylash() {
    let rand = Math.floor(Math.random() * javoblar.length)
    javoblar[rand].textContent = correct;
    javoblar[rand].classList.add("win")
}

function randjoylash() {
    let ishlat = [];
    let rand = Math.floor(Math.random() * correct + 10)
    for (let i = 0; i < javoblar.length; i++) {
        if (javoblar[i].textContent == "") {
            if (ishlat.includes(rand)) {
                rand = Math.floor(Math.random() * 50);
            }
            ishlat.push(rand);
            javoblar[i].textContent = rand;
        }
    }
}

function checkWin() {
    javoblar.forEach(function (javob) {
        javob.addEventListener("click", function () {
            if (javob.classList.contains("win")) {
                javob.style.backgroundColor = "green"
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
            else{
                javob.style.backgroundColor = "red"
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
        })
    })
};


function init() {
    randnum();
    randamal();
    answers();
    joylash();
    randjoylash();
    checkWin();
}
init();