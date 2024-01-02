function solution(numbers) {
    numbers.sort((a,b) => a - b);
    const min = numbers[0] * numbers[1];
    const max = numbers[numbers.length -1] * numbers[numbers.length -2];
    
    return min > max ? min : max;
}