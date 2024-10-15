function solution(hp) {
	/**
	 * 처음 구현 방식 아래와 같이 진행했다.
	 * 처음 생각한거는 반복문을 돌려서 hp가 0이 될때까지 빼야한다고 생각을했다.
	 */
	// let count = 0
	// let total = hp
	// while (true) {
	// 	if (total > 5) {
	// 		let fiveCount = Math.floor(total / 5)
	// 		count += fiveCount
	// 		total -= fiveCount * 5
	// 	}
	// 	if (total > 3) {
	// 		count++
	// 		total -= 3
	// 	}
	// 	if (total === 1) {
	// 		let oneCount = Math.floor(total / 1)
	// 		count += oneCount
	// 		total -= oneCount * 1
	// 	}
	// 	if (total === 0) break
	// }

	const fiveCount = Math.floor(hp / 5)
	const threeCount = Math.floor((hp - fiveCount * 5) / 3)
	const oneCount = hp - (fiveCount * 5 + threeCount * 3)
	return fiveCount + threeCount + oneCount
}
solution(999)
