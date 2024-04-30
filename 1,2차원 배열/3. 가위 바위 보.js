function solution(arr1, arr2) {
	let arrLen = arr1.length
	let resultArr = []
	for (let i = 0; i < arrLen; i++) {
		if (
			(arr1[i] === 1 && arr2[i] === 3) ||
			(arr1[i] === 2 && arr2[i] === 1) ||
			(arr1[i] === 3 && arr2[i] === 2)
		) {
			resultArr.push('A')
		} else if (arr1[i] === arr2[i]) {
			resultArr.push('D')
		} else {
			resultArr.push('B')
		}
	}
	return resultArr
}

let a = [2, 3, 3, 1, 3]
let b = [1, 1, 2, 2, 3]
console.log(solution(a, b))
