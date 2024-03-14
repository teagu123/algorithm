function solution(str) {
	//문자열이외는 제거하면 되는것이다
	let toUpperStr = str.toUpperCase().replace(/[^a-z]/g, '')

	if (toUpperStr.split('').reverse().join('') === toUpperStr) return 'YES'
	return 'NO'
}
let str = 'found7, time: study; Yduts; emit, 7Dnuof'
console.log(solution(str))
