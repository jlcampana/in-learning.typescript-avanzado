import { Fistro as Test, StringValidator } from './interfaces';
import { User } from './models';

import { Fistro2 } from './example';

import example from './assets/example.json';

// import * as pkg from '../package.json';
// const { name, version } = require('../package.json');


const user: User = new User('pepe');

let string: StringValidator;
let fistro: Test;

const pepe: Fistro2 = new Fistro2();
pepe.name = 'te da cuen';

console.log(user);
console.log(pepe);
console.log(example);

