function solution(arr1, arr2) {
    const N1 = arr1.length;
    const N2 = arr2.length;

    if (N1 < N2) return -1;
    if (N1 > N2) return 1;

    const S1 = arr1.reduce((a,b) => a + b, 0);
    const S2 = arr2.reduce((a,b) => a + b, 0);

    return S1 < S2 ? -1 : S1 > S2 ? 1 : 0;
}
