function solution(arr) {
	let total = arr.reduce((a, b) => a + b)

	for (let i = 0; i < 8; i++) {
		for (let j = i + 1; j < 9; j++) {
			if (total - (arr[i] + arr[j]) === 100) {
				arr.splice(j, 1)
				arr.splice(i, 1)
			}
		}
	}
	return arr
}
let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13]

console.log(solution(arr))
