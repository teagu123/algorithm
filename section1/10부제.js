function solution(carNum, propsArr) {
	let count = 0

	for (let i of propsArr) {
		if (i % 10 === carNum) {
			count++
		}
	}
	return count
}
