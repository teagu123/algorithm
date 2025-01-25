function solution(num) {
	let answer = []
	let cnt = new Array(num).fill(0)

	const DFS = n => {
		if (n === num + 1) {
			let tmp = ''
			for (let i = 1; i < n; i++) {
				if (cnt[i] === 1) {
					tmp += i
				}
			}
			if (tmp.length !== 0) answer.push(tmp)
		} else {
			cnt[n] = 1
			DFS(n + 1)

			cnt[n] = 0
			DFS(n + 1)
		}
	}

	DFS(1)

	return answer
}
