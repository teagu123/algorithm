function solution(arr1, arr2) {
	const answer = []

	for (let i of arr1) {
		const find = arr2.find(el => el === i)
		find && answer.push(find)
	}

	return answer.sort((a, b) => a - b)
}
