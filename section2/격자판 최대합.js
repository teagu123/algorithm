function solution(arr) {
	let max = 0

	let length = arr.length

	//세로
	for (let j = 0; j < length; j++) {
		let width = 0
		let heigth = 0
		let cross1 = 0
		let cross2 = 0

		for (let i = 0; i < length; i++) {
			width += arr[i][j]
			heigth += arr[j][i]
			if (i === j) {
				cross1 += arr[i][i]
			}
			cross2 += arr[i][length - (i + 1)]
		}

		if (max < width) {
			max = width
		}
		if (max < heigth) {
			max = heigth
		}
		if (max < cross1) {
			max = cross1
		}
		if (max < cross2) {
			max = cross2
		}
	}

	// [0,0],[1,1],[2,2],[3,3],[4,4]
	// [0,4],[1,3],[2,2],[3,1],[4,0]

	return max
}
