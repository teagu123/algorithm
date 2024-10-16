function solution(my_string, n) {
	/**
	 * 일단 문자의 길이만큼 반복하기
	 * 그리고 그 문자 하나하나를 repeat를 사용해서 반복시키고 문자열에 더하기
	 */
	let answer = ''
	for (let i = 0; i < my_string.length; i++) {
		answer += my_string[i].repeat(n)
	}

	return answer
}
solution('hello', 3)
