function solution(dots) {
	const x = dots.map(el => el.filter((el, index) => index === 0))
	const y = dots.map(el => el.filter((el, index) => index === 1))

	return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
}
