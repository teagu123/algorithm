function solution(a, b) {
	const firstAdd = Number(String(a) + b)
	const secondAdd = Number(String(b) + a)

	return firstAdd >= secondAdd ? firstAdd : secondAdd
}
console.log(solution(9, 91))
