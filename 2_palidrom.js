/**
 *Task word polyndrom
 * Polyndrom string that reads from left to right,
 * and from right to left the same.
 *
 * The task is to write a function that,
 * will return true if the word is a polyndrom,
 * and false if it is not.
 */

// aabbaa - true
// aabbAB - false
// aZaZa - true

// // OPTION 1
// function polindrom(word) {
//   word = word.toLowerCase();
//   for (let i = 0; i < word.length / 2; i++) {
//     if (word[i] !== word[word.length - i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// OPTION 2
function polindrom(word) {
  word = word.toLowerCase();
  return word === word.split('').reverse().join('');
}

console.log(polindrom('aaVbBvaa'));
