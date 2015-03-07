'use strict';

require('./index.css');
var Bike = require('./lib/bike');

var lovalot = new Bike('Lovalot');

console.log( lovalot.drive() );
console.log( lovalot.signalsRing() );
console.log( Bike.someStaticShit() );
