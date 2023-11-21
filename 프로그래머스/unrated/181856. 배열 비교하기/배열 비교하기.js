function solution(arr1, arr2) {
    var answer = 0;
    answer = arr1.length > arr2.length ? 1 : -1
    if(arr1.length === arr2.length) {
       if(arr1.reduce((acc,curr) => acc+curr) > arr2.reduce((acc,curr) => acc + curr)) answer = 1;
    else if(arr1.reduce((acc,curr) => acc+curr) < arr2.reduce((acc,curr) => acc + curr)) answer = -1;
        else answer = 0
    }
    return answer;
}
