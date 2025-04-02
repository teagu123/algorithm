function solution(arr) {
	// 끝나는 시간이 큰것부터
	let max = 0
	const sortArr = arr.sort((a, b) => a[0] - b[0])

	let point = sortArr[0][1]
	let count = 1
	for (let i = 1; i < sortArr.length - 1; i++) {
		if (point > sortArr[i][0]) {
			count++
		} else {
			if (max < count) {
				max = count
			}
			count = 0
			point = sortArr[i][1]
		}
	}

	return max
}
