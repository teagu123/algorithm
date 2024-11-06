function solution(l, r) {
	let answer = []
	for (let i = l; i <= r; i++) {
		const filterStr = String(i)
			.split('')
			.filter(el => el === '0' || el === '5')

		if (filterStr.length === String(i).length) {
			answer.push(i)
		}
	}
	return answer.length === 0 ? [-1] : answer
}

console.log(solution(5, 555))
