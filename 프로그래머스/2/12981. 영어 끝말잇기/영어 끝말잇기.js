function solution(n, words) {
  const setWord = new Set([words[0]]);

  for (let i = 1; i < words.length; i++) {
    if (!setWord.has(words[i]) && words[i - 1].slice(-1) === words[i][0]) {
      setWord.add(words[i]);
    } else {
      const person = (i + 1) % n;
      const round = Math.ceil((i + 1) / n);
      return [person === 0 ? n : person, round];
    }
  }
    
  return [0, 0];
}
