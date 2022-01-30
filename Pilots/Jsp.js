const squares = document.querySelectorAll(".square");
const startg =document.querySelector(".StartG");
function clickSquare(e) {
    let N;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === e.currentTarget) {
            N = i;
        }
    }
    let line = Math.floor(N / 4);
    let column = N % 4;

    for (let i = 0; i < squares.length; i++) {
        if (Math.floor(i / 4) === line || i % 4 === column) {
            if (squares[i].style.backgroundColor === "black") {
                squares[i].style.backgroundColor = "orange";
            } else squares[i].style.backgroundColor = "black";
        }

    }
    let k = 0;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].style.backgroundColor === "black") {
            k++;
        }
    }
    if (k === 16) {
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = "orange";
            startg.style.display = "block";

        }
    }
}
startg.addEventListener("click", ()=> {
    startg.style.display = "none";
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", clickSquare);
        if (Math.floor(Math.random()*10)>5) {
            squares[i].style.backgroundColor = "black";
        }
    }
});