function solution(start, end) {
	let checkList = Array.from({ length: 10001 }, () => 0)
	let distance = Array.from({ length: 10001 }, () => 0)
	let arr = []
	checkList[start] = 1
	arr.push(start)

	while (arr.length) {
		const x = arr.shift()
		for (let nx of [x - 1, x + 1, x + 5]) {
			if (nx === end) return distance[x] + 1
			if (nx <= 10000 && nx > 0 && checkList[nx] === 0) {
				checkList[nx] = 1
				arr.push(nx)
				distance[nx] = distance[x] + 1
			}
		}
	}
}
console.log(solution(5, 14))
