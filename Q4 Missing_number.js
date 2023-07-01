/* <aside>
💡 **Question 4**

Given two **0-indexed** integer arrays nums1 and nums2, return *a list* answer *of size* 2 *where:*

- answer[0] *is a list of all **distinct** integers in* nums1 *which are **not** present in* nums2*.*
- answer[1] *is a list of all **distinct** integers in* nums2 *which are **not** present in* nums1.

**Note** that the integers in the lists may be returned in **any** order.

**Example 1:**

**Input:** nums1 = [1,2,3], nums2 = [2,4,6]

**Output:** [[1,3],[4,6]]

**Explanation:**

For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].

For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

</aside> */

// BRUTE FORCE APPROACH 
// TIME COMPLEXITY → O(n * m)  n → length of nums1  m → length of nums2
// SPACE COMPLEXITY → O(m + n)  → number of distinct missing numbers between the two arrays.

function removeCommonElement(nums1, nums2){

  let pureNums1 = []
  let pureNums2 = []

  for(const num1 of nums1){
    let comm_ele_found = false;
    for(const num2 of nums2){
      if(num1 === num2){
        comm_ele_found = true;
        break
      }
    }
    if(comm_ele_found === false){
      pureNums1.push(num1)
    }
  }

  for(const num2 of nums2){
    let comm_ele_found = false;
    for(const num1 of nums1){
      if( num2 === num1){
        comm_ele_found = true;
        break;
      }
    }
    if(!comm_ele_found){
      pureNums2.push(num2)
    }
  }
  return [ pureNums1 , pureNums2]
}
 
let result = removeCommonElement([1,2,3],[2,4,6])
console.log(result);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// optimized
// TIME COMPLEXITY → O(n + m)
// SPACE COMPLEXITY → O(n + m)
function findMissingDistinct(nums1, nums2) {
  const set1 = new Set(nums1.filter(num => !nums2.includes(num)));
  const set2 = new Set(nums2.filter(num => !nums1.includes(num)));

  return [Array.from(set1), Array.from(set2)];
}

const results = findMissingDistinct([1, 2, 3], [2, 4, 6]);
console.log(results);



  
  