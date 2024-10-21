function solution(array) {
	let count = 0
	array
		.join('')
		.split('')
		.forEach(el => {
			if (el === '7') {
				count++
			}
		})

	return count
}
