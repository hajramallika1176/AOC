const getFuel = (mass) => {
  return Math.floor(mass / 3) - 2;
};

const getMass = () => {
  const mass = Deno.readTextFileSync("./day1_Data.txt");
  const massArr = mass.split("\n");
  return massArr.map(getFuel).reduce((sum, fule) => sum + fule, 0);
  // console.log(massArr)
};

// getMass();

// ----------part2=--------------

const getRequiredFuel = (mass) => {
  let fuel = 0;
  while (mass > 5) {
    const requirFuel = getFuel(mass);
    fuel += requirFuel;
    mass = requirFuel;

  }
  return fuel;
};

const calculateFuel = () => {
  const mass = Deno.readTextFileSync("./day1_Data.txt").split("\n");
  // let mass = getMass();
  return mass.map(getRequiredFuel).reduce((sum, fule) => sum + fule, 0);


};
console.log(calculateFuel());
