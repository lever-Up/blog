export function asyncInc(count) {
  return new Promise(resolve => setTimeout(() => resolve(count++), 1000));
}