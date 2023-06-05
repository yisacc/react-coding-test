const flatten = (arr) => {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc.concat(flatten(item));
    } else {
      acc.push(item);
      return acc;
    }
  }, []);
};

const exampleArray = [1, 2, [3, 4, [5, 6, 7], 8], 9, 10];
console.log(flatten(exampleArray)); // [1,2,3,4,5,6,7,8,9,10]
