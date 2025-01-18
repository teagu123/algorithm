function solution(s) {
	let str = s
	let count = 0
	for (let j = 0; j < s.length; j++) {
		//일단 상황마다 배열을 나타내고
		let arr = []
		str = str.slice(1) + str[0]

		console.log('str', str)
		let error = false
		for (let i of str) {
			if (i === '[' || i === '(' || i === '{') {
				arr.push(i)
			} else if (i === ']') {
				if (arr[arr.length - 1] !== '[') {
					error = true
					break
				}
				arr.pop()
			} else if (i === ')') {
				if (arr[arr.length - 1] !== '(') {
					error = true
					break
				}
				arr.pop()
			} else if (i === '}') {
				if (arr[arr.length - 1] !== '{') {
					error = true
					break
				}
				arr.pop()
			}
		}

		console.log('arr', arr)

		if (!error && arr.length === 0) {
			count++
		}
	}
	return count
}
console.log(solution('}]()[{'))

// )(())(
