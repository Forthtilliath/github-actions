// export function sum(a, b) {
//   return a + b;
// }

export function sum(...arr) {
  return arr.reduce((sum, curr) => sum + curr, 0);
}

sum(1, 2);
sum(1, 2, 3);
