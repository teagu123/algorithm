function solution(s) {
	const strSplit = s.split(' ').map(el => Number(el))
	return Math.min(...strSplit) + ' ' + Math.max(...strSplit)
}
console.log(solution('1 2 3 4'))
