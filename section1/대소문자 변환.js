function solution(str) {
	let answer = ''

	for (let i of str) {
		i === i.toUpperCase()
			? (answer += i.toLowerCase())
			: (answer += i.toUpperCase())
	}

	return answer
}
