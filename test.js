function solution(arr) {
	let answer = []

	for (let i = 0; i < arr.length; i++) {
		// console.log(arr.indexOf(arr[i]), i)
		if (arr.indexOf(arr[i]) === i) {
			answer.push(arr[i])
		}
	}
	return answer
}

console.log(solution(['good', 'time', 'good', 'time', 'student']))
