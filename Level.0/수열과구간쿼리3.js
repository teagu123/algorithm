function solution(arr, queries) {
	for (let [first, second] of queries) {
		let tmp = arr[first]
		arr[first] = arr[second]
		arr[second] = tmp
	}
	return arr
}
console.log(
	solution(
		[0, 1, 2, 3, 4],
		[
			[0, 3],
			[1, 2],
			[1, 4],
		],
	),
)
