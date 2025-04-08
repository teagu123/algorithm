function solution(n, t, m, p) {
	const limitLength = t * m
	let totalStr = ''
	let answer = ''

	let count = 0
	while (totalStr.length < limitLength) {
		totalStr += count.toString(n)
		count++
	}

	for (let i = p - 1; i < totalStr.length; i += m) {
		if (answer.length === t) break
		answer += totalStr[i]
	}

	return answer.toUpperCase()
}
