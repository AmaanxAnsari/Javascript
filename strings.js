// 1. **Concatenation of Strings**
//    Write a function that takes two strings as input and returns their concatenation without using the `+` operator.
//    Instead, use a string method.

// const concatination = (str1, str2) => {
//   let result = str1.concat(str2);
//   return result;
// };

// let str1 = "Hello World ";
// let str2 = "Javascript concatination";
// console.log(concatination(str1, str2));

// 2. **Extracting Substrings**
//    Given a string, extract the first 5 characters and return them. Which string method would you use?

// function extraction(str1) {
//   let result = str1.substr(0, 5);
//   return result;
// }
// let str1 = "Javascript";
// console.log(extraction(str1));

// 3. **String Replacement**
//    Create a function that replaces all occurrences of the word "JavaScript" in a given string with "JS".
//  How would you handle both case-sensitive and case-insensitive replacements?

// function rep(word) {
//   let str = "Javascript is a dynamically typed language. Javascript is cool";
//   let result = str.replace(/javaSCRIpt/gi, word);
//   return result;
// }
// console.log(rep("JS"));

// 4. **Character Count**
//    Write a function that takes a string and a character as inputs and returns the number of occurrences of the character in the string.

// function findChar(str, word) {
//   let result = str.split(word).length - 1;
//   return result;
// }
// let word = "a";
// let str = "Javascript is a dynamically typed language. Javascript is cool";
// console.log(findChar(str, word));

// function findChar(str, word) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === word) {
//       count++;
//     }
//   }
//   return count;
// }
// let word = "a";
// let str = "Javascript is a dynamically typed language. Javascript is cool";
// console.log(findChar(str, word));

// 5. **Reverse a String**
//    Write a function to reverse the characters of a string.
//  You cannot use any loop structures like `for` or `while`.
//  Instead, use appropriate string or array methods.

// function revString(str) {
//   let result = str.split("").reverse().join("");
//   return result;
// }
// let str = "Javascript is a dynamically typed language. Javascript is cool";
// console.log(revString(str));

// 6. **String Case Conversion**
//    Write a function that converts all the characters in a string to uppercase,
//  then converts all of them to lowercase, and finally returns an object containing both versions.
// function revString(str) {
//   let lower = str.toLowerCase();
//   let upper = str.toUpperCase();
//   return {
//     lower: lower,
//     upper: upper,
//   };
// }
// let str = "Javascript is a dynamically typed language. Javascript is cool";
// console.log(revString(str));

// 7. **Splitting a Sentence**
//    Write a function that takes a sentence as input and splits it into an array of words using the appropriate string method.
//  Remove any extra spaces in between words.
// function splitSentence(sentence) {
//   let words = sentence.split(" ");

//   let filteredWords = words.filter((word) => word !== "");

//   return filteredWords;
// }

// let sentence = "  Javascript   is  a   dynamically typed   language  ";
// console.log(splitSentence(sentence));

// 8. **Checking for a Substring**
//    Given a string and a substring, write a function to check if the substring is present in the string.
//  Return `true` if found and `false` otherwise.

// function revString(str, word) {
//   let result = str.includes(word);
//   return result;
// }
// let word = "Java";
// let str = "Javascript is a dynamically typed language. Javascript is cool";
// console.log(revString(str, word));

// 9. **String Padding**
//    Write a function that pads a given string on both sides with a specific character to a specified length.
//   Which string method would you use to achieve this?
// function strPadding(padLength, padChar) {
//   let str = "Javascript is the best language!";
//   let result = str.padStart(padLength, padChar);
//   return result;
// }

// let padLength = 40; // Total length of the string after padding
// let padChar = "A"; // Character to pad with
// console.log(strPadding(padLength, padChar));

// 10. **Trimming a String**
//     Given a string that might contain extra whitespace at the beginning and end,
//  write a function that removes any such spaces and returns the trimmed string.

// function strTrimmer(str) {
//   let result = str.trim();
//   return result;
// }
// let str = "   javascript is a powerful language   ";
// console.log(strTrimmer(str));
