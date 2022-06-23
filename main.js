let cajaOperaciones = document.getElementById("operacion");
let cajaResultado = document.getElementById("resultado");

let teclaC = document.getElementById("tecla-C");
let teclaDivision = document.getElementById("tecla-/");
let tecla7 = document.getElementById("tecla-7");
let tecla8 = document.getElementById("tecla-8");
let tecla9 = document.getElementById("tecla-9");
let teclaMultiplicacion = document.getElementById("tecla-x");
let tecla4 = document.getElementById("tecla-4");
let tecla5 = document.getElementById("tecla-5");
let tecla6 = document.getElementById("tecla-6");
let teclaResta = document.getElementById("tecla-_");
let tecla1 = document.getElementById("tecla-1");
let tecla2 = document.getElementById("tecla-2");
let tecla3 = document.getElementById("tecla-3");
let teclaSuma = document.getElementById("tecla-+");
let tecla0 = document.getElementById("tecla-0");
let teclaPunto = document.getElementById("tecla-.");
let teclaIgual = document.getElementById("tecla-igual");

teclaC.addEventListener('click', function() {
  cajaOperaciones.textContent = '';
  cajaResultado.textContent = '';
});

teclaDivision.addEventListener('click', function() {
  cajaOperaciones.textContent += '/';
});

tecla7.addEventListener('click', function() {
  cajaOperaciones.textContent += '7';
});

tecla8.addEventListener('click', function() {
  cajaOperaciones.textContent += '8';
});

tecla9.addEventListener('click', function() {
  cajaOperaciones.textContent += '9';
});

teclaMultiplicacion.addEventListener('click', function() {
  cajaOperaciones.textContent += '*';
});

tecla4.addEventListener('click', function() {
  cajaOperaciones.textContent += '4';
});

tecla5.addEventListener('click', function() {
  cajaOperaciones.textContent += '5';
});

tecla6.addEventListener('click', function() {
  cajaOperaciones.textContent += '6';
});

teclaResta.addEventListener('click', function() {
  cajaOperaciones.textContent += '-';
});

tecla1.addEventListener('click', function() {
  cajaOperaciones.textContent += '1';
});

tecla2.addEventListener('click', function() {
  cajaOperaciones.textContent += '2';
});

tecla3.addEventListener('click', function() {
  cajaOperaciones.textContent += '3';
});

teclaSuma.addEventListener('click', function() {
  cajaOperaciones.textContent += '+';
});

tecla0.addEventListener('click', function() {
  cajaOperaciones.textContent += '0';
});

teclaPunto.addEventListener('click', function() {
  cajaOperaciones.textContent += '.';
});

teclaIgual.addEventListener('click', function() {
  cajaResultado.textContent = eval(cajaOperaciones.textContent);
});