function solution(num, arr) {
	//배열에서 특정 값과 비교는 filter로 바로 출력
	//filter는 원본 변경X
	let resultArr = arr.filter(a => a >= num)

	return resultArr
}
let arr = [7, 3, 9, 5, 6, 12]

console.log(solution(6, arr))
