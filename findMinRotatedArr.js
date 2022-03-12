// Find Minimum in Rotated Sorted Array
//Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 
//For example, the array nums = [0,1,2,4,5,6,7] might become:
// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

// Example 1:

Input: nums1 = [3, 4, 5, 1, 2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:

Input: nums2 = [4, 5, 6, 7, 0, 1, 2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
// Example 3:

Input: nums3 = [11, 13, 15, 17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 

Input: nums4 = [-11, 13, 15, 17]

Input: nums5 = [2,2,2,0,1]

// Constraints:
// n == nums.length
// 1 <= n <= 5000
// -5000 <= nums[i] <= 5000
// All the integers of nums are unique.
// nums is sorted and rotated between 1 and n times.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    // Constraint: -5000 <= nums[i] <= 5000
    let min = 5000;
    // start by checking the 1st and last values of array, if arr[0] < arr[arr.length - 1] then return arr[0] immediately
    if (nums[0] < nums[nums.length - 1]) {
        // console.log(nums[0])
        return nums[0]
    } else {
        // traverse through array to find min
        for(i = 0; i < nums.length; i++){
            if(nums[i] < min){
                // reassign min value with nums[i]
                min = nums[i]
                // console.log(min)
            }
        }
    }
    // console.log(min)
    return min
    // if i > j then stop iterating through array

};

console.log(findMin(nums1));
console.log(findMin(nums2));
console.log(findMin(nums3));
console.log(findMin(nums4));
console.log(findMin(nums5));
