function solution(n, m) {
	let tmp = Array.from({ length: m }, () => 0)

	const DFS = (level, start) => {
		if (level === m) {
			console.log(tmp)
		} else {
			for (let i = start; i <= n; i++) {
				tmp[level] = i
				DFS(level + 1, i + 1)
			}
		}
	}

	DFS(0, 1)
}
console.log(solution(4, 2))
