function solution(teacher, arr) {
	let total = 0
	let answer = 0

	arr.sort(([a1, a2], [b1, b2]) => a1 + a2 - (b1 + b2))
	const copyArr = [...arr]

	for (let i = 0; i < copyArr.length; i++) {
		const sum = copyArr[i][0] + copyArr[i][1]

		if (teacher >= sum + total) {
			total += sum
			answer++
			arr.shift()
		} else {
			for (let j = 0; j < arr.length; j++) {
				if (teacher >= total + (arr[j][0] / 2 + arr[j][1])) {
					answer++
					return answer
				}
			}
		}
	}

	return answer
}
