function solution(n, arr1, arr2) {
	const answer = []
	for (let i = 0; i < n; i++) {
		let result = ''
		const arr1Length = arr1[i].toString(2).length
		const arr2Length = arr2[i].toString(2).length
		const arr1ToBin =
			arr1Length === n
				? arr1[i].toString(2)
				: '0'.repeat(n - arr1Length) + arr1[i].toString(2)
		const arr2ToBin =
			arr2Length === n
				? arr2[i].toString(2)
				: '0'.repeat(n - arr2Length) + arr2[i].toString(2)

		for (let j = 0; j < n; j++) {
			arr1ToBin[j] === '1' || arr2ToBin[j] === '1'
				? (result += '#')
				: (result += ' ')
		}
		answer.push(result)
	}
	return answer
}
console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))
