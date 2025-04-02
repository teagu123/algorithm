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

function solution(str) {
	let count = 0
	let line = []

	for (let i = 0; i < str.length; i++) {
		if (str[i] === '(' && str[i + 1] !== ')') {
			line.push('(')
			// count += 1

			continue
		} else if (str[i] === '(' && str[i + 1] === ')') {
			count += line.length

			continue
		} else if (str[i] === ')' && str[i - 1] !== '(') {
			line.pop()
			count += 1

			continue
		}
	}

	return count
}
console.log(solution('(((()(()()))(())()))(()())'))
