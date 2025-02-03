

const jump = (code, loc) => code[loc + 1];

const add = (code, loc) => {
  const element1Loc = code[loc + 1];
  const element2Loc = code[loc + 2];
  const desLoc = code[loc + 3];
  code[desLoc] = code[element1Loc] + code[element2Loc];
  
  return loc + 4;
};

const sub = (code, loc) => {
  const element1Loc = code[loc + 1];
  const element2Loc = code[loc + 2];
  const desLoc = code[loc + 3];
  code[desLoc] = code[element1Loc] - code[element2Loc];

  return loc + 4;
};

const jumpIfEqual = (code, loc) => {
  const ele1Loc = code[loc + 1];
  const ele2Loc = code[loc + 2];

  return code[ele1Loc] === code[ele2Loc] ? code[loc + 3] : loc + 4;
};

const jumpIfLessthan = (code, loc) => {
  const ele1Loc = code[loc + 1];
  const ele2Loc = code[loc + 2];

  return code[ele1Loc] < code[ele2Loc] ? code[loc + 3] : loc + 4;
};

const promptInput = (code, loc) => {
  const value = +prompt("enter the value");
  const desLoc = code[loc + 1];
  code[desLoc] = value;

  return loc + 2;
};

const copy = (code, loc) => {
  const sourceLoc = code[loc + 1];
  const desLoc = code[loc + 2];
  code[desLoc] = code[sourceLoc];

  return loc + 3;
};

const storeValue = () => {
  const value = code[loc + 1];
  const desLoc = code[loc + 2];
  code[desLoc] = value;

  return loc + 3;
};

const instructions = {
  0: storeValue,
  1: add,
  2: sub,
  3: jump,
  4: jumpIfEqual,
  5: jumpIfLessthan,
  6: promptInput,
  7: copy,
};

const getUserCode = () =>
  prompt("enter the code")
    .split(" ")
    .map((element) => +element);
// console.log(code)

const sprint = () => {
  let location = 0;
  let program = getUserCode();
  // console.log(program)
  let instruction = program[location];

  while (instruction !== 9) {
    if (!(instruction in instructions)) {
      return "invalid instruction";
    }
    // console.log(instructions[instruction]);
    location = instructions[instruction](program, location);
    instruction = program[location];
  }

  return program;
};

console.table(sprint());
