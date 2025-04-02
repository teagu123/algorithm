function solution(arr) {
	const arrLength = arr.length
	let answer = 0
	let checkList = Array.from({ length: arrLength }, () =>
		Array.from({ length: arrLength }, () => 0),
	)

	const dir = [
		[1, 0],
		[0, 1],
		[-1, 0],
		[0, -1],
	]

	const DFS = (x, y) => {
		if (x === arrLength - 1 && y === arrLength - 1) {
			answer++
		} else {
			for (let i = 0; i < dir.length; i++) {
				const [nx, ny] = dir[i]
				if (
					x + nx < arrLength &&
					y + ny < arrLength &&
					x + nx >= 0 &&
					y + ny >= 0
				) {
					console.log(x + nx, y + ny, 'arr', arr[x + nx][y + ny], 'prev', x, y)
					if (checkList[x + nx][y + ny] === 0 && arr[x + nx][y + ny] === 0) {
						checkList[x + nx][y + ny] = 1
						DFS(x + nx, y + ny)
						checkList[x + nx][y + ny] = 0
					}
				}
			}
		}
	}

	checkList[0][0] = 1
	DFS(0, 0)

	return answer
}
console.log(
	solution([
		[0, 0, 0, 0, 0, 0, 0],
		[0, 1, 1, 1, 1, 1, 0],
		[0, 0, 0, 1, 0, 0, 0],
		[1, 1, 0, 1, 0, 1, 1],
		[1, 1, 0, 0, 0, 0, 1],
		[1, 1, 0, 1, 1, 0, 0],
		[1, 0, 0, 0, 0, 0, 0],
	]),
)
