function solution(keyinput, board) {
	const start = [0, 0]
	const limits = [(board[0] - 1) / 2, (board[1] - 1) / 2]

	keyinput.map(el => {
		if (el === 'up' && limits[1] !== start[1]) {
			start[1] += 1
		}
		if (el === 'down' && -limits[1] !== start[1]) {
			start[1] -= 1
		}
		if (el === 'left' && -limits[0] !== start[0]) {
			start[0] -= 1
		}
		if (el === 'right' && limits[0] !== start[0]) {
			start[0] += 1
		}
	})
	return start
}
console.log(solution(['left', 'right', 'up', 'right', 'right'], [11, 11]))
