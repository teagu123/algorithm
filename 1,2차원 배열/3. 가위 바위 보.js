function solution(a, b) {
	let result = []

	//비기는거 처리하고 A만 처리하고 나머지는 자동적으로 B
	for (let i = 0; i < a.length; i++) {
		if (a[i] === b[i]) {
			result.push('D')
		} else if (a[i] === 1 && b[i] === 3) {
			result.push('A')
		} else if (a[i] === 2 && b[i] === 1) {
			result.push('A')
		} else if (a[i] === 3 && b[i] === 2) {
			result.push('A')
		} else {
			result.push('B')
		}
	}

	return result
}
let a = [2, 3, 3, 1, 3]
let b = [1, 1, 2, 2, 3]

console.log(solution(a, b))

// function solution(a) {
// 	return 'test'
// }

// console.log(solution())
