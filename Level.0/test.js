function solution(myString, pat) {
	const sortStr = [...myString].sort().join('').includes(pat)

	return sortStr ? 1 : 0
}
console.log(solution('ABAB', 'ABAB'))
