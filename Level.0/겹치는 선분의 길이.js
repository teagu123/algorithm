function solution(lines) {
	let min = 10000
	let max = 0

	for (let i = 0; i < lines.length; i++) {
		min = Math.min(min, ...lines[i])
		max = Math.max(max, ...lines[i])
	}
	console.log(min, max)
	const arr = new Array(max - min).fill(0)

	for (let i = 0; i < lines.length; i++) {
		for (let j = lines[i][0] - min; j < lines[i][1] - min; j++) {
			arr[j]++
		}
	}

	return arr.filter(el => el >= 2).length
}
