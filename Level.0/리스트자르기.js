function solution(n, slicer, num_list) {
	const useSlice = (start, end) => {
		return num_list.slice(start, end)
	}
	if (n === 1) return useSlice(0, slicer[1] + 1)
	if (n === 2) return useSlice(slicer[0], num_list.length + 1)
	if (n === 3) return useSlice(slicer[0], slicer[1] + 1)
	if (n === 4) {
		const arr = useSlice(slicer[0], slicer[1] + 1)
		return arr.filter((el, idx) => idx % slicer[2] === 0)
	}
}
