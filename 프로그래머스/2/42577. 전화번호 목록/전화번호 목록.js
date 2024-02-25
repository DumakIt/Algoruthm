function solution(phone_book) {
  return phone_book.sort().every((el, idx, arr) => el !== arr[idx + 1]?.slice(0, el.length));
}