function solution(arr) {
	const strArr = arr.replaceAll('()', '*')
	const answer = []
	let count = 0
	for (let i of strArr) {
		if (i === '*') {
			count += answer.length
			continue
		}
		if (i === '(') {
			answer.push('(')
			continue
		}
		if (i === ')') {
			answer.pop()
			count++
		}
	}
	return count
}
