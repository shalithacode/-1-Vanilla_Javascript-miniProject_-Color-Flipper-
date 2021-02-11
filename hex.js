const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const hexColorBtn = document.getElementById('btn');
const color = document.querySelector('.color');

hexColorBtn.addEventListener("click", function(){

    let hexString = '#';
    for(let i = 0; i<6; i++){
        hexString += hex[getRandomNumber()];
    }
    color.textContent = hexString;
    document.body.style.backgroundColor = hexString;
});

function getRandomNumber(){

    return Math.floor(Math.random() * hex.length);

}