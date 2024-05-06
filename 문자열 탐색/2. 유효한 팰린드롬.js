function solution(stt) {
	let toUpperStr = stt.toUpperCase().replace(/[^a-z]/g, '')

	if (toUpperStr.split('').reverse().join('') === toUpperStr) return 'YES'
	return 'NO'
}

console.log(solution('found7, time: study; Yduts; emit, 7Dnuof'))
