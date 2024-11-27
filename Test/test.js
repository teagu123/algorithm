function solution(card1, card2, goal) {
	const arr = [...goal]
	for (let el of goal) {
		if (el === card1[0]) {
			card1.shift()
			arr.shift()
		} else if (el === card2[0]) {
			card2.shift()
			arr.shift()
		} else {
			break
		}
	}

	return arr.length === 0 ? 'Yes' : 'No'
}

console.log(
	solution(
		['i', 'drink', 'water'],
		['want', 'to'],
		['i', 'want', 'to', 'drink', 'water'],
	),
)
