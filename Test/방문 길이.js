function solution(dirs) {
	// 배열에 [ ] 배열을 넣어서 한다. [prev, next]
	let [x, y] = [0, 0]
	const answer = new Set()

	const direction = props => {
		switch (props) {
			case 'U':
				return [x, y + 1]
			case 'D':
				return [x, y - 1]
			case 'R':
				return [x + 1, y]
			case 'L':
				return [x - 1, y]
		}
	}

	const isValidation = (x, y) => {
		return x >= -5 && x <= 5 && y >= -5 && y <= 5
	}
	for (let i = 0; i < dirs.length; i++) {
		const [nextX, nextY] = direction(dirs[i])
		if (!isValidation(nextX, nextY)) {
			continue
		}
		answer.add(`${x}${y}${nextX}${nextY}`)
		answer.add(`${nextX}${nextY}${x}${y}`)

		x = nextX
		y = nextY
	}

	return answer.size / 2
}

console.log(solution('LULLLLLLUD'))
