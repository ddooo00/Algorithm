function solution(num_list, n) {
let answer = 0;

    // 반복문을 사용하여 num_list 순회
    for (let i = 0; i < num_list.length; i++) {
        // 만약 n이 num_list 안에 있다면 answer를 1로 설정하고 반복문 종료
        if (num_list[i] === n) {
            answer = 1;
            break;
        }
    }

    return answer;
}
