const MAX_LENGHT = 50001;

/**
 * Problem 1 - O(n^2)
 * @param {Array<Number>} arr
 * @param {Number} k
 * @returns {Number}
 * @summary Return the length of the shortest, non-empty,
 * contiguous subarray of A with sum at least K
 */
const shortestSubArraySum = function(arr, k) {
  // refer to week2 challenge for more info about runningSum function
  let minRange = MAX_LENGHT, rSum = [0, ...runningSum(arr)];

  // for each i, we search for the shortest subarray with sum >= k
  for(let i = 1; i < rSum.length; ++i) {
    // if (i - j + 1) >= minRange, there is no need to continue since
    // minRange would be the same or better solution!
    for(let j = i + 1; j > 0 && i - j + 1 < minRange; --j) {
      if(rSum[i] - rSum[j - 1] >= k) minRange = i - j + 1;
    }
  }

  return minRange == MAX_LENGHT ? -1: minRange;
}

/**
 * Problem 1 - O(nLog(n))
 * @param {Array<Number>} arr
 * @param {Number} k
 * @returns {Number}
 * @summary Return the length of the shortest, non-empty,
 * contiguous subarray of A with sum at least K
 */
const shortestSubSum = function(arr, k) {
  // refer to week2 challenge for more info about runningSum function
  let minRange = MAX_LENGHT, rSum = [0, ...runningSum(arr)];

  // for each i, we search for the shortest subarray with sum >= k
  // using binary search (rSum is sorted by default)
  for(let i = 0; i < arr.length; ++i) {
    const range = binarySearch(rSum, i + 1, k);
    
    if(range != -1) minRange = Math.min(range, minRange);
  }

  return minRange == MAX_LENGHT ? -1: minRange;
}


/**
 * 
 * @param {Array<Number>} arr - sorted array of numbers
 * @param {Number} i - ending index
 * @param {Number} k - threshold
 * @returns {Number} lenght of subarray with sum >= k or -1 if there is none
 * @summary find the shortest subarray ending at i with sum >= k
 */
const binarySearch = function(arr, i, k) {
  let low = 1, high = i, ans = -1;

  while(low <= high) {
    const mid = Math.floor((low + high) / 2);
    if(arr[i] - arr[mid - 1] >= k) {
      low = mid + 1;
      ans = i - mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
}