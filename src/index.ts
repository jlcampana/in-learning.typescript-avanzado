import { CustomUser, Fistro as Test, StringValidator } from './interfaces';
import { Fistro2 } from './example';

import example from './assets/example.json';
// import * as pkg from '../package.json';
// const { name, version } = require('../package.json');


let user: CustomUser = {
  name: 'fistro'
}
let string: StringValidator;
let fistro: Test;

const pepe: Fistro2 = new Fistro2();
pepe.name = 'te da cuen';

console.log(user);
console.log(pepe);
console.log(example);

// console.log(`fistro ${name} ${version}`);