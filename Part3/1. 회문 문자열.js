function solution(str) {
	/**
	 * 처음에는 배열을 split아여 for문으로 스택을 이용하는 방법을 진행하였는데 그럴필요없다.
	 * split으로 배열을 만들고 reverse를 사용하여 반대로 진행후 join을 통해서 문자열로 만들면 끝이다
	 */

	let toUpperStr = str.toUpperCase()
	if (toUpperStr.split('').reverse().join('') === toUpperStr) return 'YES'
	return 'NO'
}

console.log(solution('dsOsd'))
