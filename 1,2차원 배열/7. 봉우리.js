function solution(arr) {
	let h = arr.length
	let dx = [-1, 0, 1, 0]
	let dy = [0, -1, 0, -1]
	let cnt = 0
	for (let i = 0; i < h; i++) {
		for (let j = 0; j < h; j++) {
			let flag = false

			for (let k = 0; k < 4; k++) {
				let nx = i + dx[k]
				let ny = j + dy[k]
				if (nx >= 0 && nx < h && ny >= 0 && ny < h && arr[nx][ny] > arr[i][j]) {
					flag = false
					break
				}
				if (flag) cnt++
			}
		}
	}

	for (let i = 0; i < h; i++) {
		for (let j = 1; j < h; j++) {
			if (
				arr[i][j] > arr[i][j - 1] &&
				arr[i][j] > arr[i][j + 1] &&
				arr[i][j] > arr[i - 1][j] &&
				arr[i][j] > arr[i + 1][j]
			) {
				cnt++
			}
		}
	}
	return cnt
}

let arr = [
	[5, 3, 7, 2, 3],
	[3, 7, 1, 6, 1],
	[7, 2, 5, 3, 4],
	[4, 3, 6, 4, 1],
	[8, 7, 3, 5, 2],
]
console.log(solution(arr))
