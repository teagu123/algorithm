function solution(num) {
	let answer = []
	while (true) {
		if (Math.floor(num / 2) === 1 || Math.floor(num / 2) === 0) {
			answer.unshift(num % 2)
			answer.unshift(Math.floor(num / 2))

			break
		}
		answer.unshift(num % 2)

		num = Math.floor(num / 2)
	}
	return Number(answer.join(''))
}

console.log(solution(10))
