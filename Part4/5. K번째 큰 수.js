function solution(n, k, card) {
	let addArr = []
	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			for (let y = j + 1; y < n; y++) {
				addArr.push(card[i] + card[j] + card[y])
			}
		}
	}
	addArr.sort((a, b) => b - a)
	return addArr[k - 1]
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]
console.log(solution(10, 3, arr))
