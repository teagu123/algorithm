function solution(n) {
	let answer = []

	while (n !== 1) {
		answer.push(n)
		n % 2 === 0 ? (n = n / 2) : (n = 3 * n + 1)
	}
	answer.push(1)
	return answer
}
