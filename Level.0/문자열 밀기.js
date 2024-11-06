function solution(A, B) {
	let str = B
	let count = 0
	if (A === B) return 0
	for (let i = 0; i < A.length; i++) {
		str = str.slice(1, str.length) + str[0]

		count++
		if (A === str) return count
	}
	return -1
}
console.log(solution('abc', 'bca'))
