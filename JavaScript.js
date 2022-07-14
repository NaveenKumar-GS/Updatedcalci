var q = 0; //Refrence if I press = then it will as 1

function clearScreen() {
    document.getElementById("result1").value = "";
    document.getElementById("result2").value = "";
}
function calculate() {
    document.getElementById("result2").value = eval(document.getElementById("result1").value);
    q = 1;
}
function show(get) {
    if (q == 1) {
        if (get == "+" || get == "-" || get == "/" || get == "*") {
            document.getElementById("result1").value = document.getElementById("result2").value;
            q = 0;
        }
        else {
            document.getElementById("result2").value = "";
            document.getElementById("result1").value = "";
            document.getElementById("result2").value += get;
            document.getElementById("result1").value += get;
            q = 0;
            return true;
        }
    }
    const pre = document.getElementById("result1").value;
    if (get == "+" || get == "-" || get == "/" || get == "*") {
        if (pre.charAt(pre.length - 1) == get) {
            return false;
        }
        else if (pre.charAt(pre.length - 1) == "+" || pre.charAt(pre.length - 1) == "-" || pre.charAt(pre.length - 1) == "/" || pre.charAt(pre.length - 1) == "*") {
            let exisited = document.getElementById("result1").value;
            let change = exisited.substring(0, exisited.length - 1);
            document.getElementById("result1").value = change;
            document.getElementById("result1").value += get;
            return true;
        }
        else {
            document.getElementById("result2").value = "";
            document.getElementById("result1").value = eval(document.getElementById("result1").value);
            document.getElementById("result1").value += get;
            return true;
        }
    }

    document.getElementById("result2").value += get;
    document.getElementById("result1").value += get;
}
document.addEventListener('keypress', function (evt) {
    var values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '*', '+', '.', '=', 'a', 'c'];
    if (values.includes(evt.key)) {
        if (evt.key == '=' || evt.key == 'a') {
            calculate();
        }
        else if (evt.key == 'c') {
            clearScreen();
        }
        else {
            show(evt.key);
        }
    }
})
