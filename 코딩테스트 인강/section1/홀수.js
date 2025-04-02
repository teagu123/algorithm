function solution(a, b, c, d, e, f, g) {
	const filterArr = [a, b, c, d, e, f, g].filter(el => el % 2 === 1)

	let total = 0

	for (let num of filterArr) {
		total += num
	}

	return [total, Math.min(...filterArr)]
}
