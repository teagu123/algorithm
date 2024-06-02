function solution(m, arr) {
	let studentNum = arr.length
	let cnt = 0
	let total = 0

	arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]))
	for (let i = 0; i < studentNum; i++) {
		total += arr[i][0] + arr[i][1]
		cnt++
		let gap = 0
		console.log('1차 add : ', arr[i][0], arr[i][1])
		console.log('total : ', total)
		if (total > 28) {
			cnt--
			total -= arr[i][0] + arr[i][1]
			gap = 28 - total
			console.log('2차 -- : ', arr[i][0], arr[i][1])
			console.log('total : ', total)

			if (Math.floor(arr[i][0] / 2) + arr[i][1] <= gap) {
				total += Math.floor(arr[i][0] / 2) + arr[i][1]
				cnt++
				console.log('3차 add : ', Math.floor(arr[i][0] / 2), arr[i][1])
				console.log('total : ', total)
			}
		}
		if (total < 28) {
			console.log('28보다 작다')
			console.log(arr[i][0] / 2 + arr[i][1])
			if (arr[i][0] / 2 + arr[i][1] <= gap) {
				total += arr[i][0] / 2 + arr[i][1]
				cnt++
				console.log('3차 add : ', arr[i][0] / 2, arr[i][1])
				console.log('total : ', total)
			}
		}
	}
	console.log('total, cnt : ', total, cnt)
	console.log('arr', arr)
}

console.log(
	solution(33, [
		[2, 12],
		[8, 4],
		[6, 6],
		[6, 7],
	]),
)

// 4+ 7 11 9
