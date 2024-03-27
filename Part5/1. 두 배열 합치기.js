function solution(arr1, arr2) {
	arr1.push(arr2)
	console.log(arr1)
	return '1'
}

console.log(solution())
let a = [1, 3, 5]
let b = [2, 3, 6, 7, 9]
console.log(solution(a, b))
