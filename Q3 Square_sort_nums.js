// 💡 **Question 6**
// Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

// **Example 1:**

// Input: nums = [-4,-1,0,3,10]

// Output: [0,1,9,16,100]

// **Explanation:** After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100]

// BRUTE FORCE APPROACH 
// TIME COMPLEXITY → O(n log n)  due to sorting
// SPACE COMPLEXITY → O(n)  n is the length of arr element because it store all the elements which are present in nums array

function squareSortNums(nums){
    nums.sort((a,b) => Math.abs(a)- Math.abs(b));
    let arr = []
    for(let i=0; i < nums.length; i++){
        const n = nums[i] ** 2
        arr.push(n);
    }
    return arr;

}
 let result = squareSortNums([-4,-1,0,3,10])
 console.log(result);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// TIME COMPLEXITY → O(n) using two pointer approach
// SPACE COMPLEXITY → O(n) because we create a sortedArr which encompass all the nums in sorted way
 function squareSortIncNums(nums){
    let sortedArr = []
   let  sortingResult = nums.length - 1;
    left = 0;
    right = nums.length -1;
    
    while(left <= right){
        let leftSquare =  nums[left] ** 2;
   let rightSquare = nums[right] ** 2;

        if( leftSquare > rightSquare){
          sortedArr[sortingResult] = leftSquare;
          left++;
        }else{
            sortedArr[sortingResult] = rightSquare;
            right--;
        }
              sortingResult--;
    }
    return sortedArr;
 }
 let results = squareSortIncNums([-4,-1,0,3,10])
 console.log(" Sorted squares of num is " , results);