function solution(num) {
	const DFS = n => {
		if (n > num) {
		} else {
			console.log(n)
			DFS(n * 2)
			DFS(n * 2 + 1)
		}
	}

	DFS(1)
}

solution(7)
