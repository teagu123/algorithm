function solution(sizes) {
	const width = []
	const height = []
	sizes.map(el => {
		width.push(Math.max(...el))
		height.push(Math.min(...el))
	})

	return Math.max(...width) * Math.max(...height)
}

//다시 풀이한거
function solution(sizes) {
	sizes = sizes.map(el => el.sort((a, b) => b - a))
	const fir = sizes.map(el => el[0])
	const sec = sizes.map(el => el[1])
	return Math.max(...fir) * Math.max(...sec)
}
