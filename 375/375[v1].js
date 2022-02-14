/**
 * @param {number} n
 * @return {number}
 */

/*
We are playing the Guessing Game. The game will work as follows:

I pick a number between 1 and n.
You guess a number.
If you guess the right number, you win the game.
If you guess the wrong number, then I will tell you whether the number I picked is higher or lower, and you will continue guessing.
Every time you guess a wrong number x, you will pay x dollars. If you run out of money, you lose the game.

TODO: Given a particular n, return the minimum amount of money you need to guarantee a win regardless of what number I pick.
NOTE: Constraint: 1 <= n <= 200
*/
const getMoneyAmounts = function (n) {
	// Create variable equaling an iterable array(n+1), map it to an Array(n+1).  The fill method fills specified elements in an array with a value (0)
	let array = [...Array(n+1)].map((row) => Array(n + 1).fill(0));
	// Interior function(start,end) parameters.
	let standardPrice = function (start, end) {
		// Condition 1.. The event starting position value is bigger/equal to end value
		if (start >= end) {
			return 0;
		}
		// Condition2.. 
		if (array[start][end] > 0) {
			return array[start][end];
		}
		let minimumGuess = Number.MAX_SAFE_INTEGER;
		for (let iteratorPosition = start; iteratorPosition <= end; iteratorPosition++) {
			let actualPrice =
				iteratorPosition + Math.max(standardPrice(start, iteratorPosition - 1), standardPrice(iteratorPosition + 1, end));
			minimumGuess = Math.min(actualPrice, minimumGuess);
		}
		array[start][end] = minimumGuess;
		return minimumGuess;
	};
	return standardPrice(1, n);
};