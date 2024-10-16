function solution(n) {
	const dup = new Set(n)
	return [...dup].join('')
}
