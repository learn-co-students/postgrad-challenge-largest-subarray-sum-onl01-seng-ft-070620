// Kadane's Algorithm:
// O(n)
// Only need to check current subarray and last largest subarray

function largestSubarraySum(array) {
  let localMax = 0
  let globalMax = 0

  for(let n of array) {
      localMax = Math.max((localMax + n), 0)
      globalMax = Math.max(globalMax, localMax)
  }
  
  return globalMax
}

largestSubarraySum(array)

//

// // Brute force:
// // O(n^2)

// function largestSubarraySum(array) {
//   let max = 0

//   for (let i = 0; i < array.length; i++) {
//     let start = 0
//     for (let j = i; j < array.length; j++) {
//       start += array[j]
//       max = Math.max(max, start)
//     }
//   }
//   return max
// }

// largestSubarraySum(array)