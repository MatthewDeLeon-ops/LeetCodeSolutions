// The Idea
/* 
const numberOfSubstrings2 = function() {
	let str = "abcabc"
	console.log(str.indexOf('b')) // looks for the position of the letter in the string.
}
numberOfSubstrings2()
*/
const numberOfSubstrings = function (s) {
	let A = (B == C == result == 0);
	for (position = 0, j = 0; position < s.length; position++) {
		if (s[position] === "a") A++; // Increment
		if (s[position] === "b") B++; // Increment
		if (s[position] === "c") C++; // Increment
		while (A && B && C) {
			result += s.length - position;
			if (s[j] === "a") A--; // Decrement
			if (s[j] === "b") B--; // Decrement
			if (s[j] === "c") C--; // Decrement
			j++;
		}
	}
	console.log(result);
	return result;
};
