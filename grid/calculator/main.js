let keys = document.getElementsByClassName("key");

for (let i = 0; i < keys.length; i++) {
    let key = keys[i].innerHTML;

    if (key == '=' | key == 'C') {
    } else {
        keys[i].addEventListener('click', (e) => { getValue(e) });
        console.log(keys[i].innerHTML);

    }
}

const getValue = (e) => {
    document.getElementById("display").innerText += e.target.innerText;
} 

const cal = () => {
    let expression = document.getElementById("display").innerText;
    expression  = expression.replace("x", "*");
    if (expression.length > 2)
        document.getElementById("display").innerHTML = eval(expression);
    else
        console.log('null');
}

const clearDisplay=() => {
    document.getElementById("display").innerHTML="";
}