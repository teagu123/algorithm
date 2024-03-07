function solution(a, b, c) {
	let answer
	if (a > b) {
		answer = b
	} else {
		answer = a
	}
	if (answer > c) {
		answer = c
	}

	return answer
}

console.log(solution(5, 10, 7))
