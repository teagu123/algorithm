function solution(m, arr) {
	n = arr.length
	let ch = new Array(n).fill(0)
	let tmp = new Array(m).fill(0)

	const DFS = level => {
		if (level === m) {
			console.log(tmp)
		} else {
			for (let i = 0; i < n; i++) {
				if (ch[i] === 0) {
					ch[i] = 1
					tmp[level] = arr[i]
					DFS(level + 1)
					ch[i] = 0
				}
			}
		}
	}

	DFS(0)
}
