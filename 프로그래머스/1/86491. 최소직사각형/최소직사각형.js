function solution(sizes) {
  const size = [0, 0];

  sizes.forEach((el) => {
    el.sort((a, b) => b - a);
    if (el[0] > size[0]) size[0] = el[0];
    if (el[1] > size[1]) size[1] = el[1];
  });

  return size[0] * size[1];
}