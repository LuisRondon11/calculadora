//mis variables donde se almancenan los numeros y el operado ingresados 
var num1 = new Number;
var num2 = new Number;
var operador;
// variables que llaman a los botonoes
let pantalla= document.getElementById("pantalla");
let uno= document.getElementById("uno");
let dos= document.getElementById("dos");
let tres= document.getElementById("tres");
let cuatro= document.getElementById("cuatro");
let cinco= document.getElementById("cinco");
let seis= document.getElementById("seis");
let siete= document.getElementById("siete");
let ocho= document.getElementById("ocho");
let nueve= document.getElementById("nueve");
let cero= document.getElementById("cero");
let resetear= document.getElementById("resetear");
let coma= document.getElementById("coma");
let porcentaje= document.getElementById("porcentaje");
let division= document.getElementById("division");
let multiplicacion= document.getElementById("multiplicacion");
let menos= document.getElementById("menos");
let mas= document.getElementById("mas");
let igual= document.getElementById("igual");
let eliminar= document.getElementById("eliminar");
let raiz= document.getElementById("raiz");
let potencia= document.getElementById("potencia");
let residuo= document.getElementById("residuoDivicion");
//funciones que escuchan el click y colocan en pantalla lo pulsado
uno.onclick = function() {
    pantalla.textContent = pantalla.textContent + 1;
};
dos.onclick = function() {
    pantalla.textContent = pantalla.textContent + 2;
};
tres.onclick = function() {
    pantalla.textContent = pantalla.textContent + 3;
};
cuatro.onclick = function() {
    pantalla.textContent = pantalla.textContent + 4;
};
cinco.onclick = function() {
    pantalla.textContent = pantalla.textContent + 5;
};
seis.onclick = function() {
    pantalla.textContent = pantalla.textContent + 6;
};
siete.onclick = function() {
    pantalla.textContent = pantalla.textContent + 7;
};
ocho.onclick = function() {
    pantalla.textContent = pantalla.textContent + 8;
};
nueve.onclick = function() {
    pantalla.textContent = pantalla.textContent + 9;
};
cero.onclick = function() {
    pantalla.textContent = pantalla.textContent + 0;
};
coma.onclick = function() {
    pantalla.textContent = pantalla.textContent + '.';
};
resetear.onclick = function() {
    reset();
};
//mis funciones que hacen las operaciones matematicas
porcentaje.onclick = function(){
    num1 = pantalla.textContent;
    operador = "%";
    limpiar();
};
division.onclick = function() {
    num1 = pantalla.textContent;
    operador = "/";
    limpiar();
};
multiplicacion.onclick = function() {
    num1 = pantalla.textContent;
    operador = "*";
    limpiar();
};
menos.onclick = function() {
    num1 = pantalla.textContent;
    operador = "-";
    limpiar(); 
};
mas.onclick = function() {
    num1 = pantalla.textContent;
    operador = "+";
    limpiar(); 
};
raiz.onclick = () => {
    num1 = pantalla.textContent
    operador = "raiz";
    resolver();
};
potencia.onclick= () => {
    num1 = pantalla.textContent;
    operador = "potencia";
    limpiar();
};
residuo.onclick = () => {
    num1 = pantalla.textContent;
    operador = "%"
    limpiar();
};
igual.onclick = function() {
    num2 = pantalla.textContent;
    resolver(); 
  };
eliminar.onclick = function() {
  limpiar();
};
function reset() {
    pantalla.textContent = "";
    num1 = 0;
    num2 = 0;
    operacion = "";
};
function limpiar() {
    pantalla.textContent = "";
};
function resolver() {
    var respuesta = 0
    switch (operador) {
        case "%":
            respuesta = (num1*num2)/100;
            break;
        case "/":
            respuesta = num1 / num2;
            break;
        case "*":
            respuesta = num1 * num2;
            break;
        case "-":
            respuesta = num1 - num2;
            break;
        case "+":
            respuesta = Number(num1) + Number(num2);
            break;
        case "raiz":
            respuesta = Math.sqrt(num1);
            break;
        case "potencia":
            respuesta = Math.pow(num1,num2);
            break;
        case "%":
            respuesta = num1 % num2;
            break;
    };
    reset();
    pantalla.textContent = respuesta;
};