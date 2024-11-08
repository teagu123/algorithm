function solution(arr) {
	const equals = (a, b) =>
		a.length === b.length && a.every((v, i) => v === b[i])

	let prev = [...arr]
	let count = 0
	while (true) {
		arr.map((el, idx) => {
			if (el % 2 === 0 && el >= 50) {
				arr[idx] = el / 2
			}
			if (el % 2 === 1 && el < 50) {
				arr[idx] = el * 2 + 1
			}
		})

		if (equals(prev, arr)) break
		count++
		prev = [...arr]
	}
	return count
}
console.log(solution([1, 2, 3, 100, 99, 98]))
