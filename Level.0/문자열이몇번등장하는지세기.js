function solution(myString, pat) {
	//처음 count를 0으로 설정
	let count = 0

	//반복문을 ex) 6 - 3 => 3번
	for (let i = 0; i <= myString.length - pat.length; i++) {
		if (myString.slice(i, i + pat.length) === pat) {
			count++
		}
	}

	return count
}
