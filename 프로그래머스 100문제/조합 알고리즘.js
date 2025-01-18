const combination = (arr, selectNum) => {
	const result = []
	if (selectNum === 1) return arr.map(el => [el])

	arr.forEach((fixed, idx, origin) => {
		const rest = origin.slice(idx + 1) //지금 해당하는 idx말고 그 다음 모든 값들

		const combinations = combination(rest, selectNum - 1) //나머지에 대해 조합을 구한다.

		const attached = combinations.map(el => [fixed, ...el])

		result.push(...attached)
	})
	return result // 결과 담긴 results return
}

console.log(combination([1, 2, 3, 4], 3))
