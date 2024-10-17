function solution(str_list, ex) {
	/**
	 * 문자열에 특정문자가 있는지 체크 하는 방법
	 * 일단 2가지가 대표적으로 indexOf와 includes
	 * 처음은 indexOf로 인덱스를 파악한후 slice로 제거를 하려고했지만 비효율적이고 이방법으로 하면 아래 문제는 적합하지않음
	 * 그러면 filter를 사용하여 includes와 indexOf 둘중에 하나 쓰면 된다.
	 */
	const filterStr = str_list.filter(el => el.indexOf(ex) === -1).join('')
	return filterStr
}
console.log(solution(['abc', 'def', 'ghi'], 'ef'))
