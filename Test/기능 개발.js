function solution(progresses, speeds) {
	const length = progresses.length
	const answer = progresses.map((_, i) =>
		Math.ceil((100 - progresses[i]) / speeds[i]),
	)
	const result = []

	let count = 0
	let max = answer[0]

	for (let i = 0; i < length; i++) {
		if (max >= answer[i]) {
			// 지금 max보다 작을때
			count++
		} else {
			result.push(count)
			max = answer[i]
			count = 1
		}
	}
	result.push(count)

	return result
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))
