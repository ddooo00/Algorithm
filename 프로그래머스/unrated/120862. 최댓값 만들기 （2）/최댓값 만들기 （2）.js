function solution(numbers) {
    let answer = 0;

    const val = [];

    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            val.push(numbers[i] * numbers[j])
        }
    }

    answer = Math.max(...val);

    return answer;
}