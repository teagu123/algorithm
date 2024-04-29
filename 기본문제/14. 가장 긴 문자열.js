function solution(arr) {
	let point = arr[0]

	for (let x of arr) {
		if (x.length > point.length) {
			point = x
		}
	}

	return point
}
let str = ['ewqewqeewqewq', 'time', 'student', 'beautiful', 'good']

console.log(solution(str))
