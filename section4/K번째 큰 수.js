function solution(n, arr) {
	arr.sort((a, b) => b - a)
	let count = 1

	for (let i = 0; i < arr.length - 2; i++) {
		for (let j = i + 1; j < arr.length - 1; j++) {
			for (let k = j + 1; k < arr.length; k++) {
				if (count === n) {
					return arr[i] + arr[j] + arr[k]
				}
				count++
			}
		}
	}
}
