function solution(arr) {
	// 끝나는 시간이 큰것부터
	const sortArr = arr.sort((a, b) =>
		a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0],
	)
	let point = 0
	let count = 0

	for (let i of sortArr) {
		console.log(point, i)
		if (point <= i[0]) {
			count++
			point = i[1]
		}
	}
	return count
}
