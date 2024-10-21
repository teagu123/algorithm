function solution(strArr) {
	//아래와 같이하면 시간초과
	// let count = 0
	// strArr.forEach(el => {
	// 	const filterArrLength = strArr.filter(e => e.length === el.length).length
	// 	if (count < filterArrLength) {
	// 		count = filterArrLength
	// 	}
	// })
	// return count

	const counter = new Map()
	for (const str of strArr) {
		counter.set(str.length, (counter.get(str.length) || 0) + 1)
	}
	return Math.max(...counter.values())
}
console.log(solution(['a', 'bc', 'd', 'efg', 'hi']))
