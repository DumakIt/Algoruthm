function solution(id_list, report, k) {
  const answer = new Array(id_list.length).fill(0);
  const reporter = {};
  const count = {};

  id_list.forEach((el) => {
    reporter[el] = new Set();
    count[el] = 0;
  });

  report.forEach((el) => {
    const splitEl = el.split(" ");

    if (!reporter[splitEl[0]].has(splitEl[1])) {
      reporter[splitEl[0]].add(splitEl[1]);
      count[splitEl[1]] += 1;
    }
  });

  id_list.forEach((el1) => {
    if (count[el1] >= k) {
      id_list.forEach((el2, idx2) => {
        if (reporter[el2].has(el1)) {
          answer[idx2] += 1;
        }
      });
    }
  });

  return answer;
}