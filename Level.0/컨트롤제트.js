function solution(s) {
	let count = 0
	const splitStr = s.split(' ')
	for (let i = 0; i < splitStr.length; i++) {
		if (splitStr[i] === 'Z') {
			count -= Number(splitStr[i - 1])
		} else {
			count += Number(splitStr[i])
		}
		console.log(count)
	}

	return count
}
