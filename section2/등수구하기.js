function solution(arr) {
	const sortArr = [...arr].sort((a, b) => b - a)

	const answer = []
	for (let i of arr) {
		answer.push(sortArr.findIndex(el => el === i) + 1)
	}

	return answer
}
