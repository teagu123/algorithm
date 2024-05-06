function solution(str) {
	let strReplace = str.replace(/[^0-9]/g, '')
	return Number(strReplace)
}

console.log(solution('g0en2T0s8eSoft'))
