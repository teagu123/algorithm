function solution(brown, yellow) {
	const total = brown + yellow
	const arr = []
	for (let i = 1; i <= Math.sqrt(total); i++) {
		if (total % i === 0) {
			arr.push(i)
			if (i !== total / i) {
				arr.push(total / i)
			}
		}
	}
	arr.sort((a, b) => b - a)

	console.log(arr)
	if (arr.length === 3) return [arr[1], arr[1]]
	if (arr.length % 2 === 1) {
		const i = arr.slice(
			Math.floor(arr.length / 2),
			Math.floor(arr.length / 2) + 1,
		)[0]
		if ((i - 2) * (i - 2) === yellow) return [i, i]
		arr.splice(Math.floor(arr.length / 2), 1)
	}

	for (let i = 1; i <= Math.floor(arr.length / 2); i++) {
		const width = arr[Math.floor(arr.length / 2) - i]
		const height = arr[Math.floor(arr.length / 2) - 1 + i]
		console.log(width, height)
		if ((width - 2) * (height - 2) === yellow) return [width, height]
	}
}
console.log(solution(12, 4))
