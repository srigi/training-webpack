'use strict';

import './index.css';
import Bike  from './lib/bike';

var lovalot = new Bike('Lovalot');

console.log( lovalot.drive() );
console.log( lovalot.signalsRing() );
console.log( Bike.someStaticShit() );
