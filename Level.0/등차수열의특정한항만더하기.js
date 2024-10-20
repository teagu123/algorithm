function solution(a, d, included) {
	let answer = 0
	included.forEach((el, idx) => {
		if (el) {
			answer += idx * d + a
		}
	})
	return answer
}
