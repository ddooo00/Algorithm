function solution(numbers, num1, num2) {
    let result = [];
    for(var i = num1; i <= num2; i++){
        result.push(numbers[i]);
    }

    return result;
}