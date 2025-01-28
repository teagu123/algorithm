function solution(arr) {
	const length = arr.length
	let answer = 0
	const dx = [1, 1, 0, -1, -1, -1, 0, 1]
	const dy = [0, 1, 1, 1, -1, -1, -1, -1]

	const DFS = (x, y) => {
		arr[x][y] = 0
		for (let i = 0; i < length; i++) {
			const nx = x + dx[i]
			const ny = y + dy[i]

			if (
				nx >= 0 &&
				ny >= 0 &&
				nx < length &&
				ny < length &&
				arr[nx][ny] === 1
			) {
				DFS(nx, ny)
			}
		}
	}

	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length; j++) {
			if (arr[i][j] === 1) {
				DFS(i, j)
				console.log(i, j)
				answer++
			}
		}
	}

	return answer
}
