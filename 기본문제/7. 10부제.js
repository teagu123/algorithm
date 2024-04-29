function solution(day, arr) {
	let answer = 0
	//day%10이 1의 자리

	for (let x of arr) {
		if (x % 10 === day) {
			answer += 1
		}
	}
	return answer
}

arr = [25, 23, 11, 47, 53, 17, 33]
console.log(solution(3, arr))
