// const reverse = (str) => {
//   const arrayOfChars = str.split("");
//   let newStr = "";
//   for (let i = arrayOfChars.length - 1; i >= 0; i--) {
//     newStr += arrayOfChars[i];
//   }
//   return newStr;
// };

const reverse = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverse("Hello, World!"));
