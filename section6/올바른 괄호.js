function solution(arr) {
	const answer = []
	for (let i of arr) {
		if (')' && answer.length === 0) return 'NO'
		if ('(') answer.push('d')
		if (')') answer.pop()
	}

	return answer.length === 0 ? 'YES' : 'NO'
}
