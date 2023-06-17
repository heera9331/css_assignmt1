

function add() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    console.log(num1);
    alert(`Addition is : ${Number(num1)+Number(num2)}`);
}

function sub() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    alert(`Subtraction is : ${Number(num1)-Number(num2)}`);
}

function mul() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    alert(`Multiplication is : ${Number(num1)*Number(num2)}`);
}

function div() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    alert(`Division is : ${Number(num1)/Number(num2)}`);
}