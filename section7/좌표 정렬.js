function solution(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i][0] > arr[j][0]) {
				const tmp = arr[i]
				arr[i] = arr[j]
				arr[j] = tmp
				continue
			}
			if (arr[i][0] === arr[j][0] && arr[i][1] > arr[j][1]) {
				const tmp = arr[i]
				arr[i] = arr[j]
				arr[j] = tmp
				continue
			}
		}
	}

	return arr
}
