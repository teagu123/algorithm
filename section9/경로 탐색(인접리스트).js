function solution(arr) {
	const length = arr.length
	const dx = [-1, 0, 1, 0]
	const dy = [0, 1, 0, -1]
	let answer = 0

	const DFS = (x, y) => {
		if (x === length - 1 && y === length - 1) {
			answer++
		} else {
			for (let i = 0; i < 4; i++) {
				let nx = x + dx[i]
				let ny = y + dy[i]
				if (
					nx >= 0 &&
					ny >= 0 &&
					nx < length &&
					ny < length &&
					arr[nx][ny] === 0
				) {
					arr[nx][ny] = 1
					DFS(nx, ny)
					arr[nx][ny] = 0
				}
			}
		}
	}

	arr[0][0] = 1
	DFS(0, 0)
	// [가로][세로]

	return answer
}
