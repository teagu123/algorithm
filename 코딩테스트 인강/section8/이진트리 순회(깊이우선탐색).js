function solution(num) {
	const DFS = n => {
		if (n > num) {
			return
		} else {
			//전위순회
			DFS(n * 2)
			//중위순회
			DFS(n * 2 + 1)
			//후위순회
		}
	}

	DFS(1)
}
