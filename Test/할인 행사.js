function solution(want, number, discount) {
	let count = 0

	for (let i = 0; i <= discount.length - 10; i++) {
		const sliceStr = discount.slice(i, i + 10)

		for (let j = 0; j < want.length; j++) {
			if (sliceStr.filter(el => el == want[j]).length !== number[j]) {
				break
			} else {
				if (j === want.length - 1) {
					count++
				}
			}
		}
	}
	return count
}
