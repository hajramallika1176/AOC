const add = (code, loc) => {
  const element1Loc = code[loc + 1];
  const element2Loc = code[loc + 2];
  const desLoc = code[loc + 3];

  code[desLoc] = code[element1Loc] + code[element2Loc];
  return loc + 4;
};

const mul = (code, loc) => {
  const element1Loc = code[loc + 1];
  const element2Loc = code[loc + 2];
  const desLoc = code[loc + 3];
  code[desLoc] = code[element1Loc] * code[element2Loc];

  return loc + 4;
};

const instructions = {
  1: add,
  2: mul,
};

const getUserCode = (code) => code.split(",").map((element) => +element);

const sprint = () => {
  const code = Deno.readTextFileSync("./day2_Data.txt");
  let location = 0;
  const program = getUserCode(code);
  program[1] = 12;
  program[2] = 2;

  let instruction = program[location];

  while (instruction !== 99) {
    if (!(instruction in instructions)) {
      return "invalid instruction";
    }

    location = instructions[instruction](program, location);
    instruction = program[location];
  }

  return program[0];
};

console.log(sprint());


