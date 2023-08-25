function solution(n, m) {
  let a = Math.max(n, m);
  let b = Math.min(n, m);
  let r = 0;

  while (a % b > 0) {
    r = a % b;
    a = b;
    b = r;
  }

  return [b, (n * m) / b];
}