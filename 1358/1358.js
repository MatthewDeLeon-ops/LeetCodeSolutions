/*
Given a string s consisting only of characters a, b and c.
Return the number of substrings containing at least one occurrence of all these characters a, b, and c.

Constraints:
3 <= s.length <= (5 x 10^4) (50,000)
s only consists of a, b or c characters

Input: s = "abcabc"
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 

s = "abc|abc" , abc is first string and after that everything is a substring
total substring count is 4 from my view O(2N)

*/

const numberOfSubstrings = function (substring) {
	const characters = { a: 0, b: 0, c: 0 };
	const res = 0;
	// For the index, index is less than substring length, increment the value up 1
	for (let index = 0, j = 0; index < substring.length; index++) {
		let c = substring[index];
		characters[c]++;
		while (
			j < substring.length &&
			characters["a"] > 0 &&
			characters["b"] > 0 &&
			characters["c"] > 0
		) {
			characters[substring[j]]--;
			// While Condition met: When j < substring length and all 3 chars have val > 0 we subtract the a value from j.
			j++; //increment value +1
		}
		res += j; // result += value of J.
		console.log(res);
	}
	console.log("res", res);
	return res;
};
