/**
 * Problem 1
 * @param {string} address - IPv4 Address
 * @returns {string} DefangedIpAddress
 * @summary A defanged IP address replaces every period '.' with '[.]'
 */

const defangedIpAddress = function(address) {
  return address.replaceAll('.', '[.]');
}

/**
 * Problem 2
 * @param {Array<Number>} nums - Array of numbers
 * @return {Array<Number>} Running sum of the given Array
 * @summary running sum of an array as runningSum[i] = sum(nums[0]…nums[i])
 *  i.e runningSum[0] = num[0] and runningSum[i] = runningSum[i - 1] + num[i]
 * for i > 0
 */

const runningSum = function(nums) {
  let sum = 0;
  return nums.map(number => sum+= number);
}

