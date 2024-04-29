function solution(answer, spell) {
	let count = 0

	for (let x of answer) {
		if (x === spell) {
			count++ //++과 += 이걸로는 기업 코테 합불 차이 없음
		}
	}

	return count
}

console.log(solution('COMPUTERPROGRAMMING', 'C'))
