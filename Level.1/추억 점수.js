function solution(name, yearning, photo) {
	let answer = []
	const findHuman = human => {
		const findIdx = name.findIndex(el => el === human)
		if (findIdx === -1) return 0
		return yearning[findIdx]
	}

	photo.map(el => {
		let count = 0
		el.map(e => {
			count += findHuman(e, count)
		})
		answer.push(count)
	})
	return answer
}
console.log(
	solution(
		['may', 'kein', 'kain', 'radi'],
		[5, 10, 1, 3],
		[
			['may', 'kein', 'kain', 'radi'],
			['may', 'kein', 'brin', 'deny'],
			['kon', 'kain', 'may', 'coni'],
		],
	),
)
