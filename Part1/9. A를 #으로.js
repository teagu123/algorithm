function solution(arr) {
	let answer = ''
	let arrSplit = arr.split('')
	for (let x of arrSplit) {
		if (x !== 'A') {
			answer += x
		} else {
			answer += '#'
		}
	}
	return answer
}

console.log(solution('BANANA'))
