// Boolean

let muted: boolean = true;
muted = false;

// Numeros
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

// String

let nombre: string = 'hector';
let saludo = `My name is ${nombre}`;

// Arreglos

let people: string[] = [];
people = ['isable', 'nicole', 'raul'];
// people.push(9000);

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Hector');
peopleAndNumbers.push(9000);

// Enum
enum Color {
  Rojo,
  Verde,
  Azul
}

let colorFavorito: Color = Color.Azul;
console.log(`My favorito color is ${colorFavorito}`);

// Any
let comodin: any = 'Joker';
comodin = { type: 'Wildcard' };

// Object
let someObject: object = { type: 'Wildcard' };

// Functions
function add(a: number, b: number): number {
  return a + b;
}

const sum = add(4, 6);

function createAdder(a: number): (number) => number {
  return function(b: number) {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlus = addFour(6);

function fullName(firstName: string, lastName?: string): string {
  return `${firstName} ${lastName}`;
}

const hector = fullName('Hector', 'Flores');
console.log(hector);
