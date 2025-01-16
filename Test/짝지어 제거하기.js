function solution(s) {
	let arr = []
	for (let i of s) {
		console.log(i)
		if (arr[arr.length - 1] === i) {
			arr.pop()
		} else {
			arr.push(i)
		}
	}

	return arr.length === 0 ? true : false
}
console.log(solution('baabaaa'))
