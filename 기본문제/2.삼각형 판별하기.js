function solution(a, b, c) {
	//일단 제일 큰 값이 나머지 두개 값보다 커야한다.
	let answer = 'YES'
	let maxNum = 0
	let total = a + b + c

	if (a > b) {
		maxNum = a
	} else {
		maxNum = b
	}
	if (x > maxNum) {
		maxNum = c
	}
	if (maxNum > total - maxNum) {
		answer = 'NO'
	}

	return answer
}

console.log(solution(13, 33, 17))
