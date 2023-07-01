/* <aside>
💡 **Question 8**

An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.

**Example 1:**

**Input:** changed = [1,3,4,2,6,8]

**Output:** [1,3,4]

**Explanation:** One possible original array could be [1,3,4]:

- Twice the value of 1 is 1 * 2 = 2.
- Twice the value of 3 is 3 * 2 = 6.
- Twice the value of 4 is 4 * 2 = 8.

Other original arrays could be [4,3,1] or [3,1,4].

</aside> */


// TIME COMPLEXITY  → O(n log n)
// SPACE COMPLEXITY → O(n)
function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      return [];
    }
    
    const counter = new Map();
    const original = [];
    
    // Count the occurrences of each number in the changed array
    for (const num of changed) {
      counter.set(num, (counter.get(num) || 0) + 1);
    }
    
    // Iterate through the changed array using counting sort-like approach
    for (const num of changed) {
      if (counter.get(num) === 0) {
        // Skip if the number is already used
        continue;
      }
      
      const doubled = num * 2;
      
      if (counter.get(doubled) === 0) {
        return [];
      }
      
      // Append the original number to the result array
      original.push(num);
      
      // Update the counters
      counter.set(num, counter.get(num) - 1);
      counter.set(doubled, counter.get(doubled) - 1);
    }
    
    return original;
  }

  const result = findOriginalArray([1,3,4,2,6,8]);
  console.log(result);