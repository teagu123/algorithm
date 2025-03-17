function solution(maps) {
	maps = maps.map(el => el.split(''))

	const L = maps.length
	const C = maps[0].length

	const nx = [0, 1, 0, -1]
	const ny = [1, 0, -1, 0]

	let answer = 0

	const dfs = (x, y, goal) => {
		const visit = Array.from({ length: L }, () => Array(C).fill(false))
		const queue = [[x, y, 0]]

		while (queue.length > 0) {
			const [xx, yy, cnt] = queue.shift()

			if (maps[xx][yy] === goal) {
				return cnt
			}

			for (let i = 0; i < 4; i++) {
				const sumX = xx + nx[i]
				const sumY = yy + ny[i]

				if (
					sumX >= 0 &&
					sumY >= 0 &&
					sumX < L &&
					sumY < C &&
					maps[sumX][sumY] !== 'X' &&
					!visit[sumX][sumY]
				) {
					visit[sumX][sumY] = true
					queue.push([sumX, sumY, cnt + 1])
				}
			}
		}
	}

	for (let i = 0; i < L; i++) {
		for (let j = 0; j < C; j++) {
			if (maps[i][j] === 'S') {
				answer += dfs(i, j, 'L')
			} else if (maps[i][j] === 'L') {
				answer += dfs(i, j, 'E')
			}
		}
	}

	return answer ? answer : -1
}
