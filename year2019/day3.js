const upp = (pos, value) => (pos["y"] += +value);
const dowen = (pos, value) => (pos["y"] -= +value);
const right = (pos, value) => (pos["x"] += +value);
const left = (pos, value) => (pos["x"] -= +value);

const currentPos = (pos, path) => {
  const direction = path[0];
  const value = path.slice(1);
  const loockUp = {
    U: upp,
    R: right,
    L: left,
    D: dowen,
  };
  loockUp[direction](pos, value);
  console.log(pos)
  return pos
};

const getPosition = (wire) => {
  return wire.split(",").reduce(currentPos, { x: 0, y: 0 });
};

const manhattanDistance = () => {
  // const [wire1, wire2] = Deno.readTextFileSync("day3_Data.txt").split("\n");

  const wire1positoin = getPosition('R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51');
  const wire2positoin = getPosition('U98,R91,D20,R16,D67,R40,U7,R15,U6,R7');
  const distance=Math.abs(wire1positoin.x)+Math.abs(wire2positoin.y)
  console.log(distance);
};

manhattanDistance();
