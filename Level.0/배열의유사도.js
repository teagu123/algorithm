function solution(s1, s2) {
	/**
	 * 이거같은 경우는 나는 forEach와 find를 같이 사용했다.
	 * 하지만 filter와 find 혹은 include를 사용해도 좋다.
	 *
	 * find는 그 값을 반환하고 include는 불리언을 반환한다.
	 * 지금 같은 상황에는 불리언 값이면 충분하기 때문에 include가 더 적합하다 라고 판단
	 */
	let answer = 0
	s1.forEach(el => {
		s2.find(s2el => s2el === el) && answer++
	})

	return answer
}
solution(['a', 'b', 'c'], ['com', 'b', 'd', 'p', 'c'])
