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

function solution(sizes) {
	const sortArr = sizes.map(el => el.sort((a, b) => b - a))

	let a = 0
	let b = 0

	for (let i of sortArr) {
		const [fir, sec] = i

		a = Math.max(a, fir)
		b = Math.max(b, sec)
	}

	return a * b
}

function solution(sizes) {
	sizes = sizes.map(el => el.sort((a, b) => b - a))

	const size = [0, 0]

	for (let [x, y] of sizes) {
		size[0] = Math.max(x, size[0])
		size[1] = Math.max(y, size[1])
	}

	return size[0] * size[1]
}
