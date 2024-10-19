function solution(strArr) {
	let result = []
	strArr.map((el, idx) => {
		if ((idx + 1) % 2 === 1) {
			result.push(strArr[idx].toLowerCase())
		} else {
			result.push(strArr[idx].toUpperCase())
		}
	})
	return result
}
console.log(solution(['aBc', 'AbC']))
