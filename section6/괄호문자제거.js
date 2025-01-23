function solution(arr) {
	const answer = []
	let total = ''
	for (let i of arr) {
		if (i === '(') {
			answer.push('(')
		} else if (i === ')') {
			answer.pop()
		} else {
			if (answer.length === 0) {
				total += i
			}
		}
	}

	return total
}
