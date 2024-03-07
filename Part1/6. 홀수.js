function solution(arr) {
	let answer = []
	let total = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 1) {
			answer.push(arr[i])
		}
	}
	for (let j = 0; j < answer.length; j++) {
		total += answer[j]
	}

	console.log(total, Math.min(...answer))
}

arr = [12, 77, 38, 41, 53, 92, 85]
console.log(solution(arr))
