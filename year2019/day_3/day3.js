const upp = (pos, value) => (pos["y"] += +value);
const dowen = (pos, value) => (pos["y"] -= +value);
const right = (pos, value) => (pos["x"] += +value);
const left = (pos, value) => (pos["x"] -= +value);

const currentPos = (pos, path) => {
  if (!path) {
    return pos;
}
  const direction = path[0];
  const value = path.slice(1);
  const loockUp = {
    U: upp,
    R: right,
    L: left,
    D: dowen,
  };
  loockUp[direction](pos, value);
  return pos;
};

const arePositionEqul = (p1, p2) => {
  
  return p1.x === p2.x && p1.y === p2.y;
};
const getPosition = (wire1, wire2) => {

  const crossPos = [];
  const wire1Pos = { x: 0, y: 0 };
  const wire2POs = { x: 0, y: 0 };

  for (let i = 0; i < wire1.length; i++) {
    const nextPosW1 = currentPos(wire1Pos, wire1[i]);
    const nextPosW2 = currentPos(wire2POs, wire2[i]);
     
    if (arePositionEqul(nextPosW1, nextPosW2)) {
      crossPos.push(nextPosW1);
    }
  }
  return crossPos;
};

const manhattanDistance = () => {
  // const [wire1, wire2] = Deno.readTextFileSync("day3_Data.txt").split("\n");

  const wire1 ="R8,U5,L5,D3";
  const wire2 = "U7,R6,D4,L4";
  const arrWire1 = wire1.split(",");
  const arrWire2 = wire2.split(",");
  // console.log(wire1,wire2)
   const allcrossPos=getPosition(arrWire1,arrWire2)

  console.log(allcrossPos);
};

manhattanDistance();
