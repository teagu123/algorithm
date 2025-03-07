function solution(numbers) {
	let answer = numbers
		.map(numbers => String(numbers))
		.sort((a, b) => b + a - (a + b))

	let count = ''
	answer.map(el => (count += el))

	return answer[0] === '0' ? '0' : count
}
