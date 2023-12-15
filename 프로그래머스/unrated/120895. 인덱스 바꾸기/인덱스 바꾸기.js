function solution(my_string, num1, num2) {
    let temp = '';
    const strArray = my_string.split('');
    temp = strArray[num1];
    strArray[num1] = strArray[num2];
    strArray[num2] = temp;
    return strArray.join('');
}