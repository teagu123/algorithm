function solution(arr1) {
	let arrLength = arr1.length
	let cnt = 1
	let answer = []
	for (let i = 0; i < arrLength; i++) {
		for (let j = 0; j < arrLength; j++) {
			if (arr1[j] > arr1[i]) {
				cnt++
			}
		}
		answer.push(cnt)
		cnt = 1
	}
	return answer
}

let a = [92, 92, 92, 70, 92]
console.log(solution(a))
