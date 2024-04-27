function solution(a, arr) {
	let arrLength = arr.length

	let lp = 0
	let cnt = 0
	let total = 0

	for (let rp = 0; rp < arrLength; rp++) {
		total += arr[rp]
		if (total === a) {
			cnt++
			console.log(arr[rp])
		}
		while (total > a) {
			total -= arr[lp--]
			if (total === a) {
				cnt++
				lp = 0
			}
		}
	}
	return cnt
}

let a = [1, 2, 1, 3, 1, 1, 1, 2]
console.log(solution(6, a))
