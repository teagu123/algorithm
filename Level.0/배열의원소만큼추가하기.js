function solution(strArr) {
	let arr = []
	strArr.forEach(el => {
		for (let i = 0; i < el; i++) {
			arr.push(el)
		}
	})
	return arr
}
