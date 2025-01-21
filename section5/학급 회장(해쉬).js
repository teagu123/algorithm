function solution(str) {
	let max = 0
	let point = undefined

	const answer = {}

	for (let i of str) {
		if (answer[i]) {
			answer[i] += 1
		} else {
			answer[i] = 1
		}
	}

	for (let i in answer) {
		if (max < answer[i]) {
			max = answer[i]
			point = i
		}
	}

	return point
}
