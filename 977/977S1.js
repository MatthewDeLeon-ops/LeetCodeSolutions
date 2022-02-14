/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:
Constraints:
1 <= nums.length <= 104-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

*/
const sortedSquares = function (nums) {
	// Create New Array using the length of the input Nums and use a static Value of 0
	const result = new Array(nums.length).fill(0);
	let leftPosition = 0;
	//takes the right position and moves it back one.
	let rightPosition = nums.length - 1;
	// takes the index's position and moves it back one.
	let IndexResult = nums.length - 1;

	//Comparison of the ^2 values of the left & right
	while (leftPosition <= rightPosition) {
		let leftValue = Math.pow(nums[leftPosition], 2);
		let rightValue = Math.pow(nums[rightPosition], 2);

		if (leftValue < rightValue) {
			// when the ^2 value of the right position is larger than the left's we get our value in the right position and then decrement it's position [for indexResult] and repeat the process. We are checking which value is greater i.e. is -4^2 greater or is 3^2.
			result[IndexResult] = rightValue;
			rightPosition--;
		} else {
			//Once we have processed 10,3,0 the logic hits here and increments the position to -1 which returns 1.
			result[IndexResult] = leftValue;
			leftPosition++; //incrementation
		}
		IndexResult--; //decrement result
	}
	return result; // -4,-1,0,3,10 ---> 0,1,9,16,100
};

//NOTE: Time complexity O(N) -- RESULT ARRAY. times we are iterating depending on the size of array. once. Overall it's linear
