function solution(n, computers) {
	const visit = Array.from({ length: n }, () => 0)
	let cnt = 0
    let max = 10000

	const dfs = level => {
		visit[level] = 1
		for (let i = 0; i < n; i++) {
			if (computers[level][i] === 1 && visit[i] === 0) {
				dfs(i)
			}
		}
	}

	for (let i = 0; i < n; i++) {
		if (visit[i] === 0) {
			dfs(i)
			cnt++
		}
	}

	return cnt
}
