function solution(myString) {
	return myString
		.split('x')
		.filter(el => el !== '')
		.sort()
}
console.log(solution('dxccxbbbxaaaa'))
