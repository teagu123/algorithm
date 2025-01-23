function solution(arr) {
	//선택 정렬

	for (let i = 0; i < arr.length; i++) {
		let tmp = arr[i],
			j
		for (j = i - 1; j >= 0; j--) {
			if (arr[j] > tmp) arr[j + 1]
			else break
		}
		arr[j + 1] = tmp
	}

	return arr
}
