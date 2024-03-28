function solution(arr1, arr2) {
	//point 2개로 잡고
	//정렬을 시키고 그리고 하나씩 잡으면서 같으면 answer에 추가
	//다른게 작으면 그거 다음꺼로 비교 이런식으로 전체를 비교하는 형식이다.
	let n = arr1.length
	let m = arr2.length
	arr1.sort((a, b) => a - b)
	arr2.sort((a, b) => a - b)

	let p1 = 0
	let p2 = 0
	let answer = []

	while (p1 < n && p2 < m) {
		if (arr1[p1] < arr2[p2]) {
			p1++
		}
		if (arr1[p1] === arr2[p2]) {
			answer.push(arr1[p1++])
			p2++
		}
		if (arr1[p1] > arr2[p2]) {
			p2++
		}
	}
	return 'test'
}

let a = [1, 3, 9, 5, 2]
let b = [3, 2, 5, 7, 8]
console.log(solution(a, b))
