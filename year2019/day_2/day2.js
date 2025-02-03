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



const sprint = (noun,verb) => {
  const code = Deno.readTextFileSync("./day2_Data.txt");
  const program = getUserCode(code);
  let location = 0;                  
  program[1] = noun;
  program[2] = verb;
  let instruction = program[location];
  // program[0] !== expexted
  while (instruction != 99) {
    
    location = instructions[instruction](program, location);
    instruction = program[location];
    // console.log(location,actual)
  }
  
  return [program[0],noun,verb];
};

// sprint();



const main = () => {
  const expexted = 19690720;
  
  for (let i = 12; i <= 99; i++){
    for (let j = 3; j <= 99; j++){
      const [actual,noun,verb] = sprint(i, j)
      if (actual === expexted) {
        return (noun * 100) + verb;
      }
    }
  }
}

console.log(main())
