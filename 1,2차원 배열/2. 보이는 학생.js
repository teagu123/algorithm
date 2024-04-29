function solution(arr) {
	//첫시작을 가장 처음 친구
	let maxLength = arr[0]
	let count = 0

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] <= maxLength) {
			count++
		} else {
			maxLength = arr[i]
		}
	}

	return arr.length - count
}
let arr = [130, 135, 148, 140, 145, 150, 150, 150]

console.log(solution(arr))
