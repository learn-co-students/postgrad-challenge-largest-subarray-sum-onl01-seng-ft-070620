function largestSubarraySum(array) {
    let solution = array[0]
    for (let i = 1; i < array.length; i++) {
        array[i] = Math.max(array[i], array[i] + array[i-1])
        solution = Math.max(solution, array[i])
    }
    return solution
}