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

//다시 풀이
function solution(genres, plays) {
	// 1번째. 장르별 정렬

	let data = {}
	let listData = {}
	let list = []
	let answer = []

	for (let i = 0; i < genres.length; i++) {
		data[genres[i]]
			? (data[genres[i]] += plays[i])
			: (data[genres[i]] = plays[i])
		listData[genres[i]]
			? (listData[genres[i]] += ',' + i + ' ' + plays[i])
			: (listData[genres[i]] = String(i + ' ' + plays[i]))
	}

	for (let i in data) {
		list.push([i, data[i]])
	}

	const sortList = list.sort((a, b) => b[1] - a[1]).map(el => el[0])

	for (let i of sortList) {
		let arr = []
		const splitArr = listData[i].split(',')

		if (splitArr.length === 1) {
			answer.push(Number(splitArr[0].split(' ')[0]))
			continue
		}

		const mapSplitArr = splitArr
			.map(el => el.split(' '))
			.sort((a, b) => Number(b[1]) - Number(a[1]))
		// for(let j =0;j<mapSplitArr.length;j+=2){
		//     if(!mapSplitArr[j+1]) break
		//     answer.push(...[Number(mapSplitArr[j][0]), Number(mapSplitArr[j+1][0])])
		// }

		answer.push(...[Number(mapSplitArr[0][0]), Number(mapSplitArr[1][0])])
	}

	return answer
}
