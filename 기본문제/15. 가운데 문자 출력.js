function solution(str) {
	/**
	 * 문자열을 자르는 방법
	 * 1. substr() 사용을 ❌지양❌한다. 사용처가 없을경우 명세해서 제거 될 것
	 * 2. substring()
	 *
	 * 배열을 자르는 방법
	 * 3. slice()
	 * 4. splice()
	 */
	let strHalfPoint = Math.floor(str.length / 2)

	let answer = ''

	if (str.length % 2 === 1) {
		//홀수
		answer = str.substring(strHalfPoint, strHalfPoint + 1)
	} else {
		//짝수
		answer = str.substring(strHalfPoint - 1, strHalfPoint + 1)
	}

	return answer
}

console.log(solution('gododkod'))
