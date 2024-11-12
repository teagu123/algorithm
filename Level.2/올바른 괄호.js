function solution(s) {
	let count = 0
	for (let str of s) {
		str === '(' ? count++ : count--
		if (count < 0) return false
	}
	return count === 0 ? true : false
}
console.log(solution('(()('))
