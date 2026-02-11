
function matematicas(op, a, b) {
    let resultado = 0;
    if (op == "suma") {
        resultado = a + b;
    } else if (op == "resta") {
        resultado = a - b;
    } else if (op == "multiplicacion") {
        resultado = a * b;
    } else if (op == "division") {
        if (b == 0) {
            return "No se puede dividir entre 0";
        }
        resultado = a / b;
    }

    return resultado;
}
