function solution(arr1, arr2) {
	return arr2.sort((a, b) => a - b).findIndex(el => el === arr1[1]) + 1
}
