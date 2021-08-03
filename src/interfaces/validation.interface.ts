export interface StringValidator {
  isAcceptable(s: string): boolean;
}

/**Interfaz para usuarios */
export interface CustomUser{
  name: string;
}

export interface Fistro{
  name: string;
}