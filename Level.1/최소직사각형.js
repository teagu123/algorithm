function solution(sizes) {
	const width = []
	const height = []
	sizes.map(el => {
		width.push(Math.max(...el))
		height.push(Math.min(...el))
	})

	return Math.max(...width) * Math.max(...height)
}
