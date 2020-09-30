var globalCalculadora = [
  {
    id: 1,
    description: 'Soma(a+b):',
    calculationFunction: function sum(a, b) {
      return a + b;
    },
    type: 'a_b',
  },
  {
    id: 2,
    description: 'subtração a-b:',
    calculationFunction: function sub(a, b) {
      return a - b;
    },
    type: 'a_b',
  },
  {
    id: 3,
    description: 'subtração b-a:',
    calculationFunction: function subt(a, b) {
      return b - a;
    },
    type: 'a_b',
  },
  {
    id: 4,
    description: 'multiplicação axb:',
    calculationFunction: function mult(a, b) {
      return formatarNumero(a * b);
    },
    type: 'a_b',
  },
  {
    id: 5,
    description: 'Divisão a/b:',
    calculationFunction: function div1(a, b) {
      return getDivision(a, b);
    },
    type: 'a_b',
  },
  {
    id: 6,
    description: 'Divisão b/a:',
    calculationFunction: function div2(b, a) {
      return getDivision(b, a);
    },
    type: 'b_a',
  },
  {
    id: 7,
    description: 'A ao quadrado:',
    calculationFunction: function square(a) {
      return a ** 2;
    },
    type: 'a',
  },
  {
    id: 8,
    description: 'B ao quadrado:',
    calculationFunction: function square(b) {
      return b ** 2;
    },
    type: 'b',
  },
  {
    id: 9,
    description: 'Divisores de A:',
    calculationFunction: function getDivisorsFrom(a) {
      return getDivisores(a);
    },
    type: 'a',
  },
  {
    id: 10,
    description: 'Divisores de B:',
    calculationFunction: function getDivisorsFrom(b) {
      return getDivisores(b);
    },
    type: 'b',
  },
  {
    id: 11,
    description: 'Fatorial de A:',
    calculationFunction: function getFatorialFrom(a) {
      return getFatorial(a);
    },
    type: 'a',
  },
  {
    id: 12,
    description: 'Fatorial de B:',
    calculationFunction: function getFatorialFrom(b) {
      return getFatorial(b);
    },
    type: 'b',
  },
];

var globalInputA = document.querySelector('#inputA');
var globalInputB = document.querySelector('#inputB');
function start() {
  globalInputA.addEventListener('input', calcularInputA);
  globalInputB.addEventListener('input', calcularInputB);
  calculadora();
}

function calcularInputA() {
  calculadora();
}
function calcularInputB() {
  calculadora();
}
function calculadora() {
  var divCalculadora = document.querySelector('#calculos');
  var classCalculadora = document.createElement('div');
  classCalculadora.classList.add('row');
  var a = parseInt(globalInputA.value, 10);
  var b = parseInt(globalInputB.value, 10);
  for (var i = 0; i < globalCalculadora.length; i++) {
    var calculoAtual = globalCalculadora[i];
    var type = calculoAtual.type;
    var calculoAtualFuncao = calculoAtual.calculationFunction;
    var id = 'input_' + calculoAtual.id;
    var value = getCalculos(type, calculoAtualFuncao, a, b);
    var div = getMaterializeDiv();
    var input = getMaterializeInput(id, value);
    var label = getMaterializeLabel(id, calculoAtual.description);

    div.appendChild(input);
    div.appendChild(label);
    classCalculadora.appendChild(div);
  }
  divCalculadora.innerHTML = '';
  divCalculadora.appendChild(classCalculadora);
}

function getCalculos(tipo, calculationFunction, a, b) {
  var value = '';
  switch (tipo) {
    case 'a':
      value = calculationFunction(a);
      break;
    case 'b':
      value = calculationFunction(b);
      break;
    case 'a_b':
      value = calculationFunction(a, b);
      break;

    case 'b_a':
      value = calculationFunction(b, a);
      break;

    default:
      value = 'O tipo de cálculo não foi identificado.';
  }
  return value;
}

function formatarNumero(num) {
  return new Intl.NumberFormat('pt-br').format(num);
}

function getMaterializeDiv() {
  var div = document.createElement('div');
  div.classList.add('input-field', 'col', 's6', 'm4', 'l4');
  return div;
}
function getMaterializeInput(id, value) {
  var input = document.createElement('input');
  input.id = id;
  input.readOnly = true;
  input.type = 'text';
  input.value = value;
  return input;
}
function getMaterializeLabel(id, description) {
  var label = document.createElement('label');
  label.for = id;
  label.textContent = description;
  label.classList.add('active');
  return label;
}

function getDivisores(numero) {
  var divisores = [];
  for (var i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisores.push(i);
    }
  }
  return divisores.join(' , ') + ' ' + '(' + divisores.length + ')';
}
function getFatorial(numero) {
  if (numero > 21) {
    return 'Número muito grande';
  }
  var resultado = 1;
  for (var i = numero; i > 1; i--) {
    resultado *= i;
  }
  return formatarNumero(resultado);
}
function getDivision(a, b) {
  if (b === 0) {
    return 'Divisão por 0';
  }
  return a / b;
}
start();
