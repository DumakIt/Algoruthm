function solution(N, stages) {
  stages.sort((a, b) => a - b);

  const infos = [];
  for (let i = 1; i <= N; i++) {
    infos.push({
      stage: i,
      users: 0,
      fail: 0,
    });
  }

  let allUsers = stages.length;
  for (let i = 0; i < stages.length; i++) {
    if (infos[stages[i] - 1]) {
      infos[stages[i] - 1].users++;

      if (stages[i] !== stages[i + 1]) {
        const fail = infos[stages[i] - 1].users / allUsers;
        allUsers -= infos[stages[i] - 1].users;

        infos[stages[i] - 1].fail = fail;
      }
    }
  }

  return infos
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map((el) => el.stage);
}