const pantalla = document.querySelector('#pantalla');
const operacionCompleta = document.querySelector('#operacionCompleta');
const botonesNumeros = document.querySelectorAll('[data-numero]');
const botonesOperadores = document.querySelectorAll('[data-operador]');
let n1 = new Number;
let n2 = new Number;
let operador = null;
botonesNumeros.forEach(numero => {
    numero.addEventListener('click', (e) => {
        pantalla.textContent += e.target.value;
    });
});
botonesOperadores.forEach(operador => {
    operador.addEventListener('click', (e) => {
        if (operador.value == '=') operacion();
        if (operador.value == '&#9003;') borrar();
        if (operador.value == 'AC') reset();
        if (operador.value == '&#8730;') raiz();
        if (operador.value != '&#9003;' && operador.value != 'ac' && operador.value != '&#8730') agregarOperador(e.target.value);
    });
});
window.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) pantalla.textContent += e.key;
    if (e.key == '=' || e.key == 'Enter') operacion();
    if (e.key == 'Backspace')  borrar();
    if (e.key == 'Escape') reset();
    if ( e.key == '/' || e.key == '*' || e.key == '-' || e.key == '+') agregarOperador(e.key);
    if (e.key == '.' && pantalla.textContent.includes('.')) return;
        else if (e.key == '.') pantalla.textContent += e.key;
});
function agregarOperador(op) {
    n1 = pantalla.textContent;
    operador = op;
    operacionCompleta.textContent = `${n1}${operador}`;
    pantalla.textContent = '';
};
function operacion() {
    n2 = pantalla.textContent;
    operacionCompleta.textContent = `${n1}${operador}${n2}`;
    if (operador == '/' && n2 == 0) return pantalla.textContent = 'estas mal';
    switch (operador) {
        case '+':
            suma();
            break;
        case '-':
            resta();
            break;
        case '*':
            multiplicacion();
            break;
        case '/':
            division();
            break;
        case '%':
            porcentaje();
            break;
        case 'X^':
            potencia();
            break;
        case 'Reciduo':
            reciduo();
            break;
    };
};
function borrar() {
    pantalla.textContent = pantalla.textContent.toString().slice(0,-1);
};
function reset() {
    n1 = '';
    n2 = '';
    operador = '';
    pantalla.textContent = '';
    operacionCompleta.textContent = '';
};
function suma() {
    pantalla.textContent = parseFloat(n1) + parseFloat(n2);
    operacionCompleta.textContent = '';
};
function resta() {
    pantalla.textContent = parseFloat(n1) - parseFloat(n2);
    operacionCompleta.textContent = '';
};
function multiplicacion() {
    pantalla.textContent = parseFloat(n1) * parseFloat(n2);
    operacionCompleta.textContent = '';
};
function division() {
    pantalla.textContent = parseFloat(n1) / parseFloat(n2);
    operacionCompleta.textContent = '';
};