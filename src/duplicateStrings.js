// Create a function that takes a string and returns a
// new string with duplicates removed

/*
 const str = 'This is is a test test string';
 removeDuplicates(str); // 'This is a test string'
 */

//  const removeDuplicates = (str) => {
//    const wordArray = str.split(" ");
//    let newArrayStr = [];
//    wordArray.forEach((element) => {
//      let count = 0;
//      newArrayStr.forEach((el) => {
//        if (el === element) {
//          count++;
//        }
//      });
//      if (count === 0) {
//        newArrayStr.push(element);
//      }
//    });
//    return newArrayStr.join(" ");
//  };

 const removeDuplicates = (str) => {
    const arr=str.split(' ')
    const set= new Set(arr)

    const newString = [...set].join(" ");
    return newString;
 }

 const str = "This is is a test test string";
 console.log(removeDuplicates(str));