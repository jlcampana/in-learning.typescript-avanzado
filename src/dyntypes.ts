export interface Joke {
  body: string;
  category: string;
  [key: string]: string;
}

const joke: Joke = {
  body: 'fistro te da cuen',
  category: 'chiquito',
  nombre: 'Chiquito de la Calzada',
  frase: 'te da cuen'
}