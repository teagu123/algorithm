function solution(arr1) {
	let cnt = 0
	let count = 0
	for (a of arr1) {
		console.log(a)
		if (a === 1) {
			cnt++
			count += cnt
		} else {
			cnt = 0
		}
	}
	return count
}

let a = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]
console.log(solution(a))
