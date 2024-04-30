function solution(a, b) {
	let resultArr = a.filter(a => a >= b)
	return resultArr
}

let a = [7, 3, 9, 5, 6, 12]
console.log(solution(a, 6))
