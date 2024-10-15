function solution(n, t) {
	/**
	 * 내가 생각한 방법.
	 * for문으로 반복문 돌리고 total이라는 변수에 2배로 누적
	 *
	 * Math.pow를 사용하면 거듭제곱을 할수있다.
	 * Math.pow(대상,횟수)
	 */
	let total = n
	for (let i = 1; i <= t; i++) {
		total = total * 2
	}
	return total
}
solution(7, 15)
