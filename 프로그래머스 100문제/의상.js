function solution(clothes) {
	let list = {}
	let count = 1

	for (let el of clothes) {
		const type = el[1]
		list[type] ? (list[type] += 1) : (list[type] = 1)
	}

	for (let el in list) {
		count *= list[el] + 1
	}

	return count - 1
}
