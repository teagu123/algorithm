function solution(age) {
	let spl = 'abcdefghij'
	let answer = ''
	for (let i of String(age)) {
		answer += spl[i]
	}
	return answer
}
