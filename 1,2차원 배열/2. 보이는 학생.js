function solution(arr) {
	let cnt = 0

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < arr[i + 1]) cnt++
	}

	return cnt
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153]
console.log(solution(arr))
