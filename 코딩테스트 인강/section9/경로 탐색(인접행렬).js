function solution(n, arr) {
	// 방향 X, 모든 경로를 찾아야한다.
	// 갔던곳은 check = 1로 한다.

	let map = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0))
	let check = new Array(n + 1).fill(0)
	let answer = 0

	// map 세팅
	for (let [a, b] of arr) {
		map[a][b] = 1
	}

	const DFS = level => {
		if (level === n) {
			answer++
		} else {
			for (let i = 1; i <= n; i++) {
				if (map[level][i] === 1 && check[i] === 0) {
					check[i] = 1
					DFS(i)
					check[i] = 0
				}
			}
		}
	}

	check[1] = 1
	DFS(1)

	return answer
}
