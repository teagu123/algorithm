function solution(M, N) {
	const length = M - 1
	const width = N === 1 ? 1 : M * (N - 1)

	return length + width
}
console.log(solution(1, 5))
