const isAssendingOrder = (arr) => {
  // arr.every((e,i,a)=>e<a[i+1])
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};
const isDubble = (arr) => {
  for (let i = 0; i < arr.length - 1; i += 1) {
    if ((arr[i] !== arr[i - 1]) && (arr[i + 1] !== arr[i + 2])) {
      if (arr[i] === arr[i + 1]) {
        
        return true;
      }
    }
  }
  return false;
};

// const areAllSame = (arr) => {                       //122444 
//   for (let i = 0; i < arr.length - 2; i++) {
//     if (arr[i]!==arr[i+1]) {
//       return false;
//     }
//   }
//   return true;
// };

const isNumberPassword = (number) => {
  const arr = (number + "").split("");

// console.log(arr)
  return   (isAssendingOrder(arr) && isDubble(arr)) ;
};

const createPassward = () => {
  let passwards = 0;
  for (let i =206938; i <= 679128; i++) {
    // console.log(i);
    if (isNumberPassword(i)) {
      passwards += 1;
    }
  }
  console.log(passwards);
};

createPassward();



