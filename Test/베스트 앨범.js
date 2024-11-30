function solution(genres, plays) {
	const obj = {}
	const answer = []
	for (let i = 0; i < genres.length; i++) {
		if (!obj[genres[i]]) {
			obj[genres[i]] = 0
			obj[genres[i]] += plays[i]
		} else {
			obj[genres[i]] += plays[i]
		}
	}

	const arrObj = Object.entries(obj).sort((a, b) => b[1] - a[1])

	for (let [category, count] of arrObj) {
		const filterArr = plays
			.filter((el, idx) => genres[idx] === category)
			.sort((a, b) => b - a)

		if (filterArr.length !== 1 && filterArr.length % 2 === 1) {
			filterArr.pop()
		}
		const mapNum = filterArr.length === 1 ? 1 : 2
		for (let i = 0; i < mapNum; i++) {
			const findIndex = plays.findIndex(el => el === filterArr[i])
			answer.push(findIndex)
			plays[findIndex] = 0
		}
	}
	return answer
}
