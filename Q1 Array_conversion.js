/* <aside>
💡 **Question 1**

Convert 1D Array Into 2D Array

You are given a **0-indexed** 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns using **all** the elements from original.

The elements from indices 0 to n - 1 (**inclusive**) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (**inclusive**) should form the second row of the constructed 2D array, and so on.

Return *an* m x n *2D array constructed according to the above procedure, or an empty 2D array if it is impossible*.

**Example 1:**

               1  2 
1 2 3 4  →     3  4 

**Input:** original = [1,2,3,4], m = 2, n = 2

**Output:** [[1,2],[3,4]]

**Explanation:** The constructed 2D array should contain 2 rows and 2 columns.

The first group of n=2 elements in original, [1,2], becomes the first row in the constructed 2D array.

The second group of n=2 elements in original, [3,4], becomes the second row in the constructed 2D array.

</aside> */

// TIME COMPLEXITY → O(m * n)  for each (m) outerLoops inner loops runs n time
// SPACE COMPLEXITY → O(m * n) because we are creating m * n matrix
function arrayConversion(originalArr, m , n){

  let orgArrLength = originalArr.length;

  if( orgArrLength !== m*n){
    return []
  }

  let conv_Array  = []

  for(let i=0; i<m; i++){
    let tempArr = []
    for(let j=0; j<n; j++){
      originalArr_index = i * m + j;
      tempArr.push(originalArr[originalArr_index])
    }
    conv_Array.push(tempArr)
  }
  return conv_Array;
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function arrayConversion(originalArr, m, n) {
  let orgArrLength = originalArr.length;

  if (orgArrLength !== m * n) {
    return [];
  }

  let conv_Array = [];

  for (let i = 0; i < m; i++) {
    let start = i * n;
    let end = start + n;
    conv_Array.push(originalArr.slice(start, end));
  }

  return conv_Array;
}
let result = arrayConversion([1, 2, 3, 4,3,4], 2, 2)
console.log(result);

