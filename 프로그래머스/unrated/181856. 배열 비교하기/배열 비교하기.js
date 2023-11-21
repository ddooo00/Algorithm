function solution(arr1, arr2) {
    const compareLength = arr1.length - arr2.length;
    const compareSum = arr1.reduce((acc, num) => acc + num, 0) - arr2.reduce((acc, num) => acc + num, 0);

    if (compareLength !== 0) {
        return compareLength > 0 ? 1 : -1;
    }

    return compareSum === 0 ? 0 : compareSum > 0 ? 1 : -1;
}