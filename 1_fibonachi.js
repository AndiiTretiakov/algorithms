/**
 * Fibonacci number
 * A number that is the sum of the previous two
 */
//1, 1, 2, 3, 5, 8, 13

// Recursive method for solving the task
function fibonachi(n) {
  if (n <= 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  return fibonachi(n - 1) + fibonachi(n - 2);
}

// Iterative method for solving the task
function iterationFibonaci(n) {
  if (n <= 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  let prev = 1;
  let result = 1;
  for (let i = 0; i < n - 2; i++) {
    let tmp = result;
    result += prev;
    prev = tmp;
  }
  return result;
}

console.log(fibonachi(7));

console.log(iterationFibonaci(6));
