function solution(myString) {
	/*
    아스키코드를 통해 문제를 해석하였는데
    간단하게 생각하면 그냥 replaceAll를 쓰고 정규표현식을 쓰면 된다.
    */
	let answer = ''
	for (let str of myString) {
		if (str.charCodeAt() >= 97 && str.charCodeAt() < 108) {
			answer += 'l'
		} else {
			answer += str
		}
	}
	return answer
}
console.log(solution('abcdevwxyz'))
