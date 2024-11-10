function solution(k, m, score) {
	let answer = []
	score.sort((a, b) => b - a)
	for (let i = 0; i < score.length; i += m) {
		const sliceScore = score.slice(i, i + m)
		if (sliceScore.length === m) {
			answer.push(sliceScore)
		}
	}
	let count = 0
	answer.map(el => {
		count += Math.min(...el) * m
	})
	return count
}
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]))
