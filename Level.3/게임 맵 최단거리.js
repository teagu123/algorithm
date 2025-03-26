function solution(maps) {
	const LX = maps.length
	const LY = maps[0].length
	const visit = Array.from({ length: LX }, () => Array(LY).fill(0))
	let result = 0

	const dx = [0, 1, 0, -1]
	const dy = [1, 0, -1, 0]

	const queue = []
	queue.push([0, 0])
	visit[0][0] = 1

	while (queue.length) {
		const [x, y] = queue.shift()

		for (let i = 0; i < 4; i++) {
			const nx = x + dx[i]
			const ny = y + dy[i]

			if (nx >= 0 && ny >= 0 && nx < LX && ny < LY) {
				if (visit[nx][ny] === 0 && maps[nx][ny] === 1) {
					queue.push([nx, ny])
					visit[nx][ny] = visit[x][y] + 1
				}
			}
			if (nx === LX - 1 && ny === LY) {
			}
		}
	}

	result = visit[LX - 1][LY - 1]

	return result ? result : -1
}
