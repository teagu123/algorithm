function solution(arr) {
	arr.sort((a, b) => b - a)
	let count = 1
	while (true) {
		const arrFilter = arr.filter(el => (arr[0] * count) % el !== 0)
		if (arrFilter.length === 0) return arr[0] * count
		count++
	}
}
