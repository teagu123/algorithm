// 음... 이 아래는 효율성에서 걸린다.

// function solution(people, limit) {
// 	let count = 0
// 	people.sort((a, b) => b - a) //내림차순 정렬
// 	while (people.length !== 0) {
// 		if (people[0] + people[people.length - 1] <= limit) {
// 			count++
// 			people.pop()
// 			people.shift()
// 		} else {
// 			console.log(people)
// 			count++
// 			people.shift()
// 		}
// 	}
// 	return count
// }

function solution(people, limit) {
	let count = 0
	people.sort((a, b) => b - a) // 내림차순 정렬
	let left = 0
	let right = people.length - 1

	while (left <= right) {
		if (people[left] + people[right] <= limit) {
			right--
		}
		left++
		count++
	}

	return count
}

console.log(solution([70, 50, 80, 50, 20], 100))
