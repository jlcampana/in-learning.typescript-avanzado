import { User as UserInterface } from '../interfaces';
import { Decorator, Decorator2, Decorator3} from '../decorators/common'

@Decorator
@Decorator2('te da cun')
@Decorator3('cobarde de la pradera')
export class User implements UserInterface {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greetings():string {
    return `My name is ${this.name}`;
  }
}