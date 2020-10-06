const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const dice3 = document.getElementById('dice3');

document.getElementById('bdice1').addEventListener("click", () => {
    dice1.innerHTML = Math.floor(Math.random() * 6 + 1)
});

document.getElementById('bdice2').addEventListener("click", () => {
    dice2.innerHTML = Math.floor(Math.random() * 6 + 1)
});

document.getElementById('bdice3').addEventListener("click", () => {
    dice3.innerHTML = Math.floor(Math.random() * 6 + 1)
});