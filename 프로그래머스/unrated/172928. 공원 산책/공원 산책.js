function solution(park, routes) {
  const nowPos = {};

  for (let i = 0; i < park.length; i++) {
    const splitPark = park[i].split("");

    for (let j = 0; j < splitPark.length; j++) {
      const el2 = splitPark[j];

      if (el2 === "S") {
        nowPos.y = i;
        nowPos.x = j;
        break;
      }

      if (nowPos.y !== undefined) {
        break;
      }
    }
  }

  routes.forEach((el) => {
    const routesObj = el.split(" ");
    const nowPosCopy = { ...nowPos };
    for (let i = 0; i < Number(routesObj[1]); i++) {
      if (routesObj[0] === "E") {
        if (nowPosCopy.x === park[0].length - 1 || park[nowPosCopy.y][nowPosCopy.x + 1] === "X")
          break;

        if (i === Number(routesObj[1]) - 1) {
          nowPos.x += Number(routesObj[1]);
          break;
        }
        
        nowPosCopy.x += 1;
      } else if (routesObj[0] === "W") {
        if (nowPosCopy.x === 0 || park[nowPosCopy.y][nowPosCopy.x - 1] === "X")
          break;
        if (i === Number(routesObj[1]) - 1) {
          nowPos.x -= Number(routesObj[1]);
          break;
        }
        
        nowPosCopy.x -= 1;
      } else if (routesObj[0] === "S") {
        if (nowPosCopy.y === park.length - 1 || park[nowPosCopy.y + 1][nowPosCopy.x] === "X")
          break;
        
        if (i === Number(routesObj[1]) - 1) {
          nowPos.y += Number(routesObj[1]);
          break;
        }
        
        nowPosCopy.y += 1;
      } else if (routesObj[0] === "N") {
        if (nowPosCopy.y === 0 || park[nowPosCopy.y - 1][nowPosCopy.x] === "X")
          break;
        
        if (i === Number(routesObj[1]) - 1) {
          nowPos.y -= Number(routesObj[1]);
          break;
        }
        
        nowPosCopy.y -= 1;
      }
    }
  });
  return [nowPos.y, nowPos.x];
}