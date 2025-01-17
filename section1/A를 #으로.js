function solution(str) {
	let answer = ''

	for (let i of str) {
		i === 'A' ? (answer += '#') : (answer += i)
	}

	return answer
}
