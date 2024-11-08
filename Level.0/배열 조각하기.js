function solution(arr, query) {
	for (let i = 0; i < query.length; i++) {
		const cur = query[i]

		if (i % 2 === 0) {
			arr.splice(cur + 1, arr.length - (cur + 1))
		} else {
			arr.splice(0, cur)
		}
	}

	return arr
}
console.log(solution([1, 3, 5, 7, 9, 11], [5, 0, 4, 1, 2]))
