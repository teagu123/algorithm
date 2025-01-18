function solution(table, move) {
	const result = []
	const length = table[0].length
	let count = 0
	for (let j = 0; j < move.length; j++) {
		for (let i = 0; i < length; i++) {
			if (table[i][move[j] - 1] !== 0) {
				if (result.length !== 0) {
					if (result[result.length - 1] === table[i][move[j] - 1]) {
						result.pop()
						count += 2
					} else {
						result.push(table[i][move[j] - 1])
					}
				} else {
					result.push(table[i][move[j] - 1])
				}
				table[i][move[j] - 1] = 0
				break
			}
		}
	}

	return count
}

console.log(
	solution(
		[
			[0, 0, 0, 0, 0],
			[0, 0, 1, 0, 3],
			[0, 2, 5, 0, 1],
			[4, 2, 4, 4, 2],
			[3, 5, 1, 3, 1],
		],
		[1, 5, 3, 5, 1, 2, 1, 4],
	),
)

// 다시 풀이 최대 29.63ms
function solution(board, moves) {
	console.log(board)
	const length = board[0].length

	let answer = []

	for (let move of moves) {
		for (let j = 0; j < length; j++) {
			const target = board[j][move - 1]

			if (target !== 0) {
				answer.push(target)
				board[j][move - 1] = 0
				break
			}
		}
	}

	let count = 0
	console.log(answer)
	let i = 0
	while (i < answer.length - 1) {
		console.log(answer)
		if (answer[i] === answer[i + 1]) {
			count += 2
			answer.splice(i, 2) // 현재 위치의 두 요소를 제거
			i = 0 // 다시 처음부터 시작
		} else {
			i++ // 조건이 충족되지 않으면 다음으로 이동
		}
	}
	return count
}
console.log(
	solution(
		[
			[0, 0, 0, 0, 0],
			[0, 0, 1, 0, 3],
			[0, 2, 5, 0, 1],
			[4, 2, 4, 4, 2],
			[3, 5, 1, 3, 1],
		],
		[1, 5, 3, 5, 1, 2, 1, 4],
	),
)
