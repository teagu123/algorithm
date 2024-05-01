function solution(str) {
	let lowerStr = str.toLowerCase()
	let answer = ''
	for (let i = str.length - 1; i >= 0; i--) {
		answer += lowerStr[i]
	}
	if (lowerStr === answer) return 'YES'
	return 'NO'
}

console.log(solution('gd10G'))
