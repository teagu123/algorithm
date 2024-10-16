function solution(my_string) {
	return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0)
}
solution('aAb1B2cC34oOp')
