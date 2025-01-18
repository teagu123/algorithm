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
