function solution(str, point) {
	let p = 1000
	let arr = []

	for (let x of str) {
		if (point === x) {
			p = 0
			arr.push(p)
		} else {
			p++
			arr.push(p)
		}
	}
	p = 1000
	for (let x = str.length - 1; x >= 0; x--) {
		if (str[x] === point) {
			p = 0
			arr.push(p)
		} else {
			p++
			arr[x] = Math.min(p, arr[x])
		}
	}
	return arr
}

console.log(solution('tteachermode', 'e'))
