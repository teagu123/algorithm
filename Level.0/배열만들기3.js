function solution(arr, intervals) {
	let count = 0
	let result = []
	intervals.map(([s, e]) => {
		result.push(arr.slice(s, e + 1))
		count += e
	})
	return result.flat()
}
