function solution(spell, dic) {
	const sortDic = dic.map(el => el.split('').sort().join(''))
	const sortSpell = spell.sort().join('')

	return sortDic.find(el => el === sortSpell) ? 1 : 2
}
console.log(solution(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw']))
