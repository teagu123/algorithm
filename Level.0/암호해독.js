function solution(cipher, code) {
	let result = ''
	for (let i = code - 1; i < cipher.length; i += code) {
		result += cipher[i]
	}
	console.log(result)
	return result
}
solution('dfjardstddetckdaccccdegk', 4)
