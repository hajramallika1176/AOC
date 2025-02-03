const upp = (value, privious, allPos) => {
  let [x, y] = privious.split(",");
  x = +x;
  y = +y;
  for (let i = 1; i <= value; i++) {
    // console.log(allPos.push([x, y+i]))
    allPos.push([x, y + i].join(","));
  }
  return [value,allPos.at(-1)];
};

const dowen = (value, privious, allPos) => {
  let [x, y] = privious.split(",");
  x = +x;
  y = +y;
  for (let i = 1; i <= value; i++) {
    allPos.push([x, y - i].join(","));
  }
  return [value,allPos.at(-1)];
};

const right = (value, privious, allPos) => {
  let [x, y] = privious.split(",");
  x = +x;
  y = +y;
  for (let i = 1; i <= value; i++) {
    allPos.push([x + i, y].join(","));
  }

  return [value,allPos.at(-1)];
};

const left = (value, privious, allPos) => {
  let [x, y] = privious.split(",");
  x = +x;
  y = +y;
  for (let i = 1; i <= value; i++) {
    allPos.push([x - i, y].join(","));
  }
  return [value,allPos.at(-1)];
};

const getcurrentPos = (path, privious, allPos) => {
  const direction = path[0];
  const value = path.slice(1);

  const loockUp = {
    U: upp,
    R: right,
    L: left,
    D: dowen,
  };
  return loockUp[direction](value, privious, allPos);
};

// const getallCrossPos = (p1, p2) => {
//   const allCross = p1.filter((p) => p2.includes(p));

// const add = allCross.map((pos) => {
//   const [x, y] = pos.split(",");
//   return Math.abs(+x)+ Math.abs(+y)
// });
// console.log(add)
// return Math.min(...add)
// };
const getMatchedPos = (p1, p2) => {
  const allCross = p1.filter((p) => p2.includes(p));
  console.log("allCross", allCross);

  return allCross;
};
const getAllIns = (s) => {
  let add = [0];
  const n1= Math.abs()
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    
    const [x, y] = s[i].split(",");
    const addV = Math.abs(+x) + Math.abs(+y);
    const sub = Math.abs(add - addV);
    arr.push(sub);
    add = addV;
  }

  return arr;
};

const add = (arr) => {
  return arr.reduce((sum, ele) => sum + ele, 0);
};
const getPosition = (wire1, wire2) => {
  const allPos1 = [];
  const allPos2 = [];
  let s1 = 0;
  let s2 = 0;

  let privious1 =[0, "0,0"];
  let privious2 = [0,"0,0"];
  for (let i = 0; i < wire1.length; i++) {
    privious1 = getcurrentPos(wire1[i]??'R0', privious1[1], allPos1);
    console.log(privious1[0])
    s1+= + (privious1[0])
    privious2 = getcurrentPos(wire2[i]??'R0', privious2[1], allPos2);
    console.log(privious2[0])
    s2+= + (privious2[0])
    const mPos = getMatchedPos(allPos1, allPos2);
    if (mPos.length > 0) {
      console.log(mPos);
      
      console.log("st1", s1, "st2", s2);
      // const ads1 = getAllIns(st1);
      // const ads2 = getAllIns(st2);
      // console.log("sub1",ads1,"sub2",ads2);
      // return add(ads1) + add(ads2);
      // console.log("position ",st1,"posi2",st2)
    }
  }
};

const manhattanDistance = () => {
  // const [wire1, wire2] = Deno.readTextFileSync("./day3_input.txt").split("\n");
  // const wire1 = "R8,U5,L5,D3";
  // const wire2 = "U7,R6,D4,L4";

  const wire1 = "R75,D30,R83,U83,L12,D49,R71,U7,L72";
  const wire2 = "U62,R66,U55,R34,D71,R55,D58,R83";
  const arrWire1 = wire1.split(",");
  const arrWire2 = wire2.split(",");
  // console.log(arrWire2)
  const allW1Pos = getPosition(arrWire1, arrWire2);
  console.log(allW1Pos);
  // const allW2Pos = getPosition();
  // console.log(allW1Pos);
  // console.log(allW2Pos);
  // const allCrossPos = getallCrossPos(allW1Pos, allW2Pos);
  // console.log(allCrossPos);
};

manhattanDistance();
