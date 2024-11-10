function solution(cards1, cards2, goal) {
	const length = cards1.length + cards2.length

	for (let i = 0; i < length; i++) {
		if (goal[i] === cards1[0]) {
			cards1.shift()
			continue
		}
		if (goal[i] === cards2[0]) {
			cards2.shift()
			continue
		}
		return 'No'
	}
	return 'Yes'
}
console.log(
	solution(
		['i', 'drink', 'water'],
		['want', 'to'],
		['i', 'want', 'to', 'drink', 'water'],
	),
)
