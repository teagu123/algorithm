function solution(arr) {
	//방법
	//1. for
	//2. sort() 📚
	//3, Math.min() 📚
	//여기서는 for문을 사용해도 괜찮고 sort를 사용해도 좋다.
	//하지만 es6문법인 sort를 쓰기로함
	//성능은 for문이 더 빠르지만 문제가 될정도로 큰 성능차이는 없는것으로 보임

	//sort방법
	arr.sort((a, b) => a - b)
	let answer = arr[0]

	//Math.min방법
	answer = Math.min(...arr)

	return answer
}

console.log(solution([5, 3, 7, 11, 2, 15, 17]))
