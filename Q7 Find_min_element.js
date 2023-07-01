/* <aside>
💡 **Question 7**

Suppose an array of length n sorted in ascending order is **rotated** between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

- [4,5,6,7,0,1,2] if it was rotated 4 times.
- [0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that **rotating** an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of **unique** elements, return *the minimum element of this array*.

You must write an algorithm that runs in O(log n) time.

**Example 1:**

**Input:** nums = [3,4,5,1,2]

**Output:** 1

**Explanation:**

The original array was [1,2,3,4,5] rotated 3 times.

</aside> */

// TIME COMPLEXITY → O(log n)  binary search
// SPACE COMPLEXITY → O(1)
function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      // Check if the array is sorted
      if (nums[left] < nums[right]) {
        return nums[left];
      }
  
      let mid = Math.floor((left + right) / 2);
  
      // Check if the middle element is the minimum
      if (nums[mid] < nums[right]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
  
    // If the loop ends, left and right point to the minimum element
    return nums[left];
  }
  let result = findMin([3,4,5,1,2])
  console.log(result);