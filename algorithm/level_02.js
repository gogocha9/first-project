"use strict";
{
    // 124 나라의 숫자 (이해 x)
    function solution(n) {
        return n ? solution((n - (n % 3 || 3)) / 3) + (n % 3 || 4): '';
    }
    console.log(solution(5));
}
console.log("------------------------------------------------------------------------");
{
    // 피보나치 수
    function solution(n) {
        if(n < 2) return n;
        return solution(n - 1) + solution(n - 2);
    }
    console.log(solution(7));
}
console.log("------------------------------------------------------------------------");
{
    // 행렬의 곱셈
    function solution(arr1, arr2) {
        return Array(arr1.length).fill().map((r, i) => Array(arr2[0].length).fill().map((v, j) => arr1[i].reduce((a, c, k) => a + c * arr2[k][j], 0)));
    }
    console.log(solution([[1, 4], [3, 2], [4,1]], [[3,3],[3,3]]));
}