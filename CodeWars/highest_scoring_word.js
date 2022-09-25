/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
	let highestScoreWord = '';
	let maxScore = 0;
	let currentWordScore;

	x.split(' ').forEach(char => {
		currentWordScore = [...char].reduce((accum, cur) => accum + (cur.charCodeAt(0) - 96), 0);
		if (currentWordScore > maxScore) {
			highestScoreWord = char;
			maxScore = currentWordScore;
		}
	});

	return highestScoreWord;
}

console.log(high('man i need a taxi up to ubud'));