function solution(n) {
	let answer = []
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) {
			answer.push(i)
		}
	}
	console.log(answer)
	return answer
}
solution(24)
