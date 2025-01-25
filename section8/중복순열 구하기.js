function solution(n, m) {
	let cnt = new Array(m).fill(0)
	let answer = []

	const DFS = num => {
		if (num === m) {
			console.log(cnt)
		} else {
			for (let i = 1; i <= n; i++) {
				cnt[num] = i
				DFS(num + 1)
			}
		}
	}

	DFS(0)
}
