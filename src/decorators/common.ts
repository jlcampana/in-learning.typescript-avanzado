export function Decorator(target:any) {
  console.log('fistro', target);
}

export function Decorator2(msg: string) {
  return function (target: any) {
    console.log(msg, target);
  }
}

export const Decorator3 = (msg: string) => (target: any) => {
  console.log(msg, target);
}