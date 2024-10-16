function solution(n) {
	/**
	 * 일단 Number는 split이 안되니깐
	 * 문자열로 변경후 split을 하고 reduce로 다 더한다.
	 * 이때 이니셜벨류를 비워서 오류가 뜸.
	 * 초기값을 0으로 설정해서 처음 값음 0을 더하는 형식!
	 */
	const answer = String(n)
		.split('')
		.reduce((a, b) => Number(a) + Number(b), 0)

	console.log(answer)
	return answer
}
solution(930211)
