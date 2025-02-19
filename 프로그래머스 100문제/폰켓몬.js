// function solution(arr) {
// 	let max = 0
// 	let checkList = Array.from({ length: arr.length }, () => 0)
// 	let tmp = Array.from({ length: arr.length / 2 }, () => 0)

// 	const DFS = level => {
// 		if (level === arr.length / 2) {
// 			const size = new Set(tmp).size
// 			max = Math.max(size, max)
// 		} else {
// 			for (let i = 0; i < arr.length; i++) {
// 				if (checkList[i] === 0) {
// 					checkList[i] = 1
// 					tmp[level] = arr[i]
// 					DFS(level + 1)
// 					checkList[i] = 0
// 				}
// 			}
// 		}
// 	}

// 	DFS(0)

// 	return max
// }
// console.log(solution([3, 3, 3, 2, 2, 2]))

function solution(arr) {
	const sizeSet = new Set(arr).size
	const half = arr.length / 2

	return half <= sizeSet ? half : sizeSet
}
console.log(solution([3, 3, 3, 2, 2, 2]))
