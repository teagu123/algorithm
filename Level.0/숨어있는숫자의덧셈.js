function solution(my_string) {
	/**
	 * props로 들어오는것을 모두 split을 통해 나누고
	 * 거기서 filter로 값을 추출하고 reduce로 더한다.
	 */

	const splitString = my_string
		.split('')
		.filter(el => !isNaN(el))
		.reduce((a, b) => Number(a) + Number(b))

	return splitString
}
solution('aAb1B2cC34oOp')
