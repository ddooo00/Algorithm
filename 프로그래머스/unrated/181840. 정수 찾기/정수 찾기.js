function solution(num_list, n) {
    return num_list.filter(a => a === n).length > 0 ? 1 : 0;
}