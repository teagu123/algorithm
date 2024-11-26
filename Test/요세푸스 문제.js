function solution(n, k) {
	//
	const arr = new Array(n).fill().map((el, idx) => idx + 1)

	while (arr.length !== 1) {
		for (let i = 0; i < k; i++) {
			if (i === k - 1) {
				arr.shift()
				break
			}
			const deleted = arr.shift()
			arr.push(deleted)
		}
	}
	return arr[0]
}

console.log(solution(5, 2))
