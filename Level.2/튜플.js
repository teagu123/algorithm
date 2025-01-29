function solution(s) {
	let list = []

	let total = ''
	for (let i = 1; i < s.length - 1; i++) {
		if (s[i] === '{') {
			list.push([])
			continue
		} else if (s[i] === '}' || s[i] === ',') {
			continue
		} else {
			if (s[i + 1] !== '}' && s[i + 1] !== '{' && s[i + 1] !== ',') {
				total += s[i]
				continue
			} else {
				total === ''
					? list[list.length - 1].push(Number(s[i]))
					: list[list.length - 1].push(Number(total + s[i]))
				total = ''
			}
		}
	}

	const sortArr = list.sort((a, b) => a.length - b.length)

	let set = new Set()

	for (let i = 0; i < sortArr.length; i++) {
		for (let j = 0; j < sortArr[i].length; j++) {
			set.add(sortArr[i][j])
		}
	}

	return [...set]
}
console.log(solution('{{20,111},{111}}'))
