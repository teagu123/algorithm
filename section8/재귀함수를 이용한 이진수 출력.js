function solution(num) {
	let answer = ''
	const DFS = n => {
		const ceil = Math.floor(n / 2)
		if (ceil === 0) return (answer += n % 2)

		DFS(ceil)
		answer += n % 2
	}

	DFS(num)

	return Number(answer)
}
