function solution(arr) {
	const length = arr.length

	let count = 0

	const isTop = (x, y) => {
		const num1 = arr[x - 1] ? arr[x - 1][y] : 0
		const num2 = arr[x + 1] ? arr[x + 1][y] : 0
		const num3 = arr[x][y + 1] ? arr[x][y + 1] : 0
		const num4 = arr[x][y - 1] ? arr[x][y - 1] : 0

		return arr[x][y] > Math.max(num1, num2, num3, num4)
	}

	for (let x = 0; x < length; x++) {
		for (let y = 0; y < length; y++) {
			if (isTop(x, y)) {
				count++
			}
		}
	}

	return count
}
