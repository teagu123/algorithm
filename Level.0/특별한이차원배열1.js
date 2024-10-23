function solution(n) {
	let arr = Array(n)
		.fill()
		.map(() => [])

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			arr[i].push(i === j ? 1 : 0)
		}
	}
	return arr
}
