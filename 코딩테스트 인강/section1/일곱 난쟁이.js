function solution(arr) {
	const numArr = arr

	for (let i = 0; i < numArr.length; i++) {
		let count = 0
		const pop = numArr.shift()
		numArr.push(pop)

		for (let j = 0; j < 7; j++) {
			count += numArr[j]
		}
		if (count === 100) return numArr.filter((el, idx) => idx < 7)
	}
}
