function solution(num) {
	let answer = ''
	let arr = [1]

	while (arr.length > 0) {
		const point = arr.shift()
		answer += point + ' '
		for (let i of [point * 2, point * 2 + 1]) {
			if (num < i) continue
			arr.push(i)
		}
	}

	return answer
}
