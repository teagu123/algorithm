function solution(arr1, arr2) {
	if (arr1.length > arr2.length) return 1
	if (arr1.length < arr2.length) return -1

	const arr1Total = arr1.reduce((acc, crr) => acc + crr, 0)
	const arr2Total = arr2.reduce((acc, crr) => acc + crr, 0)
	if (arr1Total > arr2Total) return 1
	if (arr1Total < arr2Total) return -1
	if (arr1Total === arr2Total) return 0
}
