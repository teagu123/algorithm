function solution(a, b) {
	const arr = [...a]
	console.log(arr)

	for (let i of b) {
		console.log(i)
		if (arr[0] === i) {
			arr.shift()
		}
	}

	return arr.length === 0 ? 'YES' : 'NO'
}
