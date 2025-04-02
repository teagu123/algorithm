function solution(n, r) {
	let answer
	const dy = new Array(n + 1).fill(0).map(() => new Array(35).fill(0))

	const DFS = (n, r) => {
		if (n === r || r === 0) {
			return 1
		} else {
			return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r))
		}
	}

	answer = DFS(n, r)
	return answer
}
