function solution(numlist, n) {
	// numlist 반복문 돌리고
	// 새로운 배열을 만든다. 차이가 나는걸로

	const gapList = numlist
		.sort((a, b) => b - a)
		.map(el => [el, n - el > 0 ? n - el : el - n])
	const sortList = gapList.sort(([a1, a2], [b1, b2]) => a2 - b2)
	return sortList.map(el => el[0])
}
