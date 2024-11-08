function solution(arr) {
	// i = 0으로 선언
	// i가 arr.length보다 작으면 반복
	// stk.length === 0 이면 arr[i]를 stk에 추가하고 i에 1을 더한다.
	// stk.length !== 0 이면 stk[stk.length-1] === arr[i] 같으면 stk[stk.length-1] 제거하고, i++한다.
	// stk.length !== 0 인데 stk[stk.length-1] !== arr[i] 다르면 stk.push(arr[i]) 그리고 i++한다.
	let stk = [arr[0]]
	for (let i = 1; i < arr.length; i++) {
		if (stk[stk.length - 1] === arr[i]) {
			stk.pop()
			continue
		}
		if (stk[stk.length - 1] !== arr[i]) {
			stk.push(arr[i])
			continue
		}
	}

	return stk.length === 0 ? [-1] : stk
}
console.log(solution([0, 1, 1, 0]))
