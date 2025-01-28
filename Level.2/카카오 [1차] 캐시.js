function solution(cacheSize, cities) {
	if (cacheSize === 0) return cities.length * 5
	let answer = 0
	let cacheArr = []

	for (let i of cities) {
		console.log(i.toUpperCase())
		const find = cacheArr.findIndex(el => el === i.toUpperCase())
		if (find === -1) {
			if (cacheArr.length === cacheSize) {
				cacheArr.shift()
			}
			answer += 5
			cacheArr.push(i.toUpperCase())
			// continue
		} else {
			cacheArr.splice(find, 1)
			cacheArr.push(i.toUpperCase())
			answer += 1
			continue
		}
	}

	return answer
}
console.log(solution(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork']))
