function solution(jobs) {
	// 소요시간이 짧은것, 작업 요청 시각이 빠른것, 작업 번호가 작은것
	// [시작시점, 소요사간]
	// [[0, 3], [1, 9], [3, 5]]
	//

	const L = jobs.length
	let time = 0
	let answer = []

	let count = 0

	while (jobs.length) {
		const filterList = jobs.filter(el => el[0] <= time)
		// console.log(filterList, jobs, time)
		count++

		if (filterList.length === 0) {
			time++
			continue
		}
		if (filterList.length === 1) {
			let point = 0

			for (let i = 0; i < jobs.length; i++) {
				const [a, b] = jobs[i]
				if (a === filterList[0][0] && b === filterList[0][1]) {
					point = i
					break
				}
			}

			const del = jobs.splice(point, 1)
			console.log('del', del)
			answer.push(time + filterList[0][1] - filterList[0][0])

			time = time + filterList[0][1]

			continue
		}
		if (filterList.length >= 2) {
			const list = filterList.sort((a, b) => a[1] - b[1])[0]
			console.log('list', list)

			let point = 0

			for (let i = 0; i < jobs.length; i++) {
				const [a, b] = jobs[i]
				if (a === list[0] && b === list[1]) {
					point = i
					break
				}
			}

			const del = jobs.splice(point, 1)
			console.log('del', del)
			answer.push(time + del[0][1] - del[0][0])

			time += del[0][1]
			continue
		}
	}
	return Math.floor(answer.reduce((a, b) => a + b) / L)
}
