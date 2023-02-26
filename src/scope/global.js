// variables

var a; //declarando
var b = 'b'; //declarando y asignando
b = 'bb'; //reasignando el valor
var a = 'aa'; //redeclaración


// Global Scope
var fruit = 'Apple'; // global

function bestFruit() {
  console.log(fruit);
};

bestFruit();

function countries() {
  country = 'Argentina';
  console.log(country)
};

countries();
console.log(country);