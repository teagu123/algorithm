function solution(score) {
	let arr = []

	score.map(([first1, first2]) => {
		arr.push(first1 + first2)
	})
	arr.sort((a, b) => b - a)
	let answer = []

	score.map(([first1, first2]) => {
		answer.push(arr.findIndex(el => el === first1 + first2) + 1)
	})

	return answer
}
console.log(
	solution([
		[80, 70],
		[70, 80],
		[30, 50],
		[90, 100],
		[100, 90],
		[100, 100],
		[10, 30],
	]),
)
