function solution(record) {
	const obj = {}

	const history = []

	for (let el of record) {
		const [key, id, name] = el.split(' ')

		if (key === 'Enter') {
			obj[id] = name
			history.push([id, '님이 들어왔습니다.'])
		}
		if (key === 'Change') {
			obj[id] = name
		}
		if (key === 'Leave') {
			history.push([id, '님이 나갔습니다.'])
		}
	}

	return history.map(el => obj[el[0]] + el[1])
}
