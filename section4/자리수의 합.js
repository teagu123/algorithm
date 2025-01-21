function solution(str) {
	const sortStr = str.sort((a, b) => a - b)
	console.log(sortStr)

	let max = 0
	let point = 0
	for (let i of sortStr) {
		let total = 0

		for (let j of String(i)) {
			total += Number(j)
		}

		if (total >= max) {
			point = i
			max = total
		}
	}

	return point
}
