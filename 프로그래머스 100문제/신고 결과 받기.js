function solution(id_list, report, k) {
	// report = [...new Set(report)]

	// const count = {}
	// const result = {}
	// const blacklist = []

	// for (let i = 0; i < id_list.length; i++) {
	// 	count[id_list[i]] = 0
	// 	result[id_list[i]] = 0
	// }

	// for (let i = 0; i < report.length; i++) {
	// 	count[report[i].split(' ')[1]] += 1
	// }

	// for (let el in count) {
	// 	if (count[el] >= k) {
	// 		blacklist.push(el)
	// 	}
	// }

	// for (let i = 0; i < report.length; i++) {
	// 	if (blacklist.find(el => el === report[i].split(' ')[1])) {
	// 		result[report[i].split(' ')[0]] += 1
	// 	}
	// }

	// return Object.entries(result).map(el => el[1])

	let reports = [...new Set(report)].map(a => {
		return a.split(' ')
	})

	console.log(reports)
}
console.log(
	solution(
		['a', 'b', 'c', 'd'],
		['a b', 'a b', 'c a', 'd a', 'a b', 'c d', 'a d', 'b c', 'b a', 'd a'],
		2,
	),
)

// 다시 풀이
function solution(id_list, report, k) {
	const arr = [...new Set(report)].map(el => el.split(' '))

	const countList = {}
	const dataList = {}
	const answer = []

	for (let el of arr) {
		const [fir, sec] = el
		countList[sec] ? (countList[sec] += 1) : (countList[sec] = 1)
		dataList[fir] ? dataList[fir].push(sec) : (dataList[fir] = [sec])
	}

	for (let i of id_list) {
		let count = 0

		if (!dataList[i]) {
			answer.push(count)
			count = 0
			continue
		}

		for (let j of dataList[i]) {
			if (countList[j] >= k) {
				count += 1
			}
		}
		answer.push(count)
	}

	return answer
}
