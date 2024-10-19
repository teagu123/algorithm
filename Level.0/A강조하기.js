function solution(myString) {
	/**
	 * 모든 문자를 소문자로 변경 후
	 * 특정 문자 a만 대문자로 변경을 하는걸로 구성함
	 */
	return myString.toLowerCase().replaceAll('a', 'A')
}
console.log(solution('abstract algebra'))
