function solution(s) {
	let answer = ''

	/**
	 * s[i]는 일단 모든 값이 나온다
	 * i는 모든 값의 인덱스값
	 * s.indexOf(s[i]) 모든값의 인덱스번호 제일 처음있는 인덱스 번호
	 * 즉 k가 인덱스Of가 0이 나오는데 i가 3이다? 그러면 그건 s=answer에 더하지 않으면 된다.
	 * 즉 indexOf는 내 문자열에 가장 처음있는 인덱스의 위치를 파악해 나머지는 다 없애는 방식이다.
	 */

	for (let i = 0; i < s.length; i++) {
		if (i === s.indexOf(s[i])) {
			answer += s[i]
		}
	}

	return answer
}

console.log(solution('ksekkset'))
