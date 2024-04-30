function solution(arr) {
	let maxVal = 0
	let addArr1 = 0
	let addArr2 = 0
	for (let i = 0; i < arr.length; i++) {
		//가로, 세로
		let sum1 = 0
		let sum2 = 0
		for (let j = 0; j < arr[i].length; j++) {
			addArr1 += arr[i][j]
			addArr2 += arr[j][i]
		}
		maxVal = Math.max(sum1, sum2, maxVal)

		//대각선
		sum1 = 0
		sum2 = 0

		for (let i = 0; i < arr.length; i++) {
			sum1 += arr[i][i]
			sum2 += arr[i][arr.length - i - 1]
		}
		maxVal = Math.max(maxVal, sum1, sum2)
	}
	console.log(maxVal)
}
let arr = [
	[10, 13, 10, 12, 15],
	[12, 39, 30, 23, 11],
	[11, 25, 50, 53, 15],
	[19, 27, 29, 37, 27],
	[19, 13, 30, 13, 19],
]
console.log(solution(arr))
