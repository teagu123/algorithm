function solution(props) {
	let answer = []
	const DFS = num => {
		if (num === 0) return
		DFS(num - 1)
		answer.push(num)
	}

	DFS(props)

	return answer
}
