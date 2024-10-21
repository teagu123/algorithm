function solution(arr) {
	const sliceArr = arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1)
	return sliceArr.length === 0 ? [-1] : sliceArr
}
