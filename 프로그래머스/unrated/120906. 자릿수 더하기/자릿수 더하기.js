function solution(n) {
    let answer = 0;
    let str = String(n); //문자열로 변환
    for (let i =0; i <str.length; i++) {
      answer += Number(str[i]); //자릿수를 숫자로 변환
    }
    return answer;
}