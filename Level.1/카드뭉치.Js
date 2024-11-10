function solution(cards1, cards2, goal) {
	const length = cards1.length + cards2.length
	const result = []

	for (let i = 0; i < length; i++) {
		if (goal[i] === cards1[0]) {
			cards1.shift()
			result.push(cards1[0])
			continue
		}
		if (goal[i] === cards2[0]) {
			cards2.shift()
			result.push(cards2[0])
			continue
		}
		if (result.length === goal.length) return 'Yes'
		return 'No'
	}
	return 'Yes'
}
console.log(solution(['a'], ['b', 'd', 'c'], ['a', 'b', 'c', 'd']))
