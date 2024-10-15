function solution(n) {
	/**
	 * 일단 for문을 처음에는 1부터 n까지 반복을 돌림.
	 * 그냥 i+=2로 즉 홀수만 반복을 돌리면 된다.
	 */
	let arr = []
	for (let i = 1; i <= n; i += 2) {
		arr.push(i)
	}
	return arr
}
solution(10)
