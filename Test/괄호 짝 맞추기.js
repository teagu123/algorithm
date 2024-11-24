function solution(arr) {
	if (arr.length % 2 === 1) return false
	const answer = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '(') {
			answer.push('d')
		} else {
			if (answer.length === 0) return false
			answer.pop()
		}
	}
	return answer.length === 0
}

console.log(solution('((()))'))
