function solution(dirs) {
	//최대 0.92ms
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

// 다시 푼거 최대 0.75ms
function solution(dirs) {
	/**
	 * U는 위로
	 * D는 아래로
	 * R은 오른쪽
	 * L은 왼쪽
	 *
	 * (0,0)으로 시작
	 *
	 * (5,5) (-5,-5) 리미트다.
	 */
	const point = [0, 0]
	const total = []

	const direction = dir => {
		if (dir === 'U') {
			if (point[1] === 5) return
			total.push(String(point[0]) + point[1] + point[0] + (point[1] + 1))
			point[1] += 1
		}
		if (dir === 'D') {
			if (point[1] === -5) return
			total.push(String(point[0]) + (point[1] - 1) + point[0] + point[1])
			point[1] -= 1
		}
		if (dir === 'R') {
			if (point[0] === 5) return
			total.push(String(point[0]) + point[1] + (point[0] + 1) + point[1])
			point[0] += 1
		}
		if (dir === 'L') {
			if (point[0] === -5) return
			total.push(String(point[0] - 1) + point[1] + point[0] + point[1])
			point[0] -= 1
		}
	}

	for (let i = 0; i < dirs.length; i++) {
		direction(dirs[i])
	}
	console.log(total)
	return new Set(total).size
}
console.log(solution('URULDD'))

console.log(solution('LULLLLLLUD'))
