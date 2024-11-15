function solution(fees, records) {
	const answer = []
	const result = []

	records.map(el => {
		const carName = el.split(' ')[1]
		const [hour, time] = el.split(' ')[0].split(':')

		const findIdx = answer.findIndex(e => e[0] === carName)
		findIdx !== -1
			? answer[findIdx].push(Number(hour) * 60 + Number(time))
			: answer.push([carName, Number(hour) * 60 + Number(time)])
	})

	answer.sort((a, b) => Number(a[0]) - Number(b[0]))

	answer.map(el => {
		console.log(el)
		let total = 0
		for (let i = 1; i < el.length; i += 2) {
			if (!el[i + 1]) {
				total += 1439 - el[i]
			} else {
				total += el[i + 1] - el[i]
			}
		}
		console.log('total', total)
		total <= fees[0]
			? result.push(fees[1])
			: result.push(fees[1] + Math.ceil((total - fees[0]) / fees[2]) * fees[3])
	})
	return result
}
console.log(
	solution(
		[120, 0, 60, 591],
		[
			'16:00 3961 IN',
			'16:00 0202 IN',
			'18:00 3961 OUT',
			'18:00 0202 OUT',
			'23:58 3961 IN',
		],
	),
)
