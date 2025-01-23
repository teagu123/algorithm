function solution(a, b) {
	const arr = [...new Array(a)].map((el, idx) => idx + 1)

	for (let i = 0; i < a - 1; i++) {
		arr.push(...arr.splice(0, b - 1))
		arr.shift()
	}
	return arr[0]
}
