function solution(elements) {
	// 어느 index에서 시작해도 원형이여야하니깐
	const circular = elements.concat(elements)
	const set = new Set()

	for (let i = 0; i < elements.length; i++) {
		// 총 10번 반복
		let sum = 0
		for (let j = 0; j < elements.length; j++) {
			sum += circular[i + j]
			set.add(sum)
		}
	}
	return set.size
}
console.log(solution([7, 9, 1, 1, 4]))
