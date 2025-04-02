function solution(str) {
	const strLength = str.length

	if (strLength % 2 === 0) {
		//짝수
		return str.slice(strLength / 2 - 1, strLength / 2 + 1)
	} else {
		//홀수
		return str[Math.ceil(strLength / 2 - 1)]
	}
}
