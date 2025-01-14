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

// 새로 풀이

function solution(props) {
	// 올바른 괄호면 true, 아니면 false

	let answer = []
	for (let i of props) {
		if (i === '(') {
			answer.push('(')
		} else {
			answer.pop()
		}
	}

	return answer.length === 0 ? true : false
}

console.log(solution('((()))'))
