/*Cree una función en TypeScript que reciba un array de strings y un número y devuelva un array de
strings donde cada string haya sido cortado para tener como máximo el número de caracteres
indicado en el parámetro (el parámetro numérico).
Ejemplo: cortador([‘abcd’, ‘efgh’, ‘ijklmn’], 2) devolverá [‘ab’, ‘ef’, ‘ij’].*/

function cortador(arrayDeString: string[], numero: number): string[] {
  return arrayDeString.map((x) => x.slice(0, numero))
}

console.log(cortador(["abcd", "efgh", "ijklmn"], 2))
