"use strict";
{
    // 2021년 a월 b일은 무슨 요일일까요?
    function solution(a, b) {
        return ['일','월','화','수','목','금','토'][new Date(2021, a-1, b).getDay()];
    }
    console.log(solution(12, 31));
}
console.log("------------------------------------------------------------------------");
{
    // 같은 숫자는 싫어
    function solution(arr) {
        return arr.filter((v, i) => v != arr[i + 1]);
    }

    console.log(solution([1, 1, 2, 2, 2, 3, 3, 4, 5, 5, 6, 8, 8]));
}
console.log("------------------------------------------------------------------------");
{
    // 나누어 떨어지는 숫자 배열
    function solution(arr, divisor) {
        const answer = arr.filter(el => el % divisor === 0);
        return answer.length ? answer.sort((p, c) => p - c) : [-1];
    }

    console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
    console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
}
console.log("------------------------------------------------------------------------");
{
    // 두 정수 사이의 합
    function solution(a, b) {
        return (a + b) * ((a > b ? a - b : b - a) + 1) / 2;
    }

    console.log(solution(11, 1));
}
console.log("------------------------------------------------------------------------");
{
    // 문자열 내 마음대로 정렬하기
    function solution(strings, n) {
        return strings.sort((p, c) => p[n] === c[n] ? p.localeCompare(c) : p[n].localeCompare(c[n]))
    }

    console.log(solution(['aez', 'cdx', 'abce', 'abcd'], 2));
}
console.log("------------------------------------------------------------------------");
{
    // 문자열 내 p와 y의 개수(함수형 메서드)
    function solution(s) {
        const p = s.split('').filter(v => ['p', 'P'].includes(v));
        const y = s.split('').filter(v => ['y', 'Y'].includes(v));
        return p.length === y.length;
    }

    console.log(solution("PpayYayP"));
}
console.log("------------------------------------------------------------------------");
{
    // 문자열 내 p와 y의 개수(정규표현식)
    function solution(s) {
        return s.replace(/p/gi, '').length == s.replace(/y/gi, '').length;
    }

    console.log(solution("PpayYayP"));
}
console.log("------------------------------------------------------------------------");
{
    // 문자열 내림차순으로 배치하기
    function solution(s) {
        return s.split('').sort((p, c) => c.charCodeAt() - p.charCodeAt()).join('');
    }
    console.log(solution('ZAazd'));
}
console.log("------------------------------------------------------------------------");
{
    // 문자열 다루기 기본
    function solution(s) {
        return /^[0-9]+$/.test(s) && [4,6].includes(s.length);
    }
    console.log(solution('1234'));
    console.log(solution('123456'));
    console.log(solution('12345a'));
    console.log(solution('12345'));
}
console.log("------------------------------------------------------------------------");
{
    // 서울에서 김서방 찾기
    function solution(seoul) {
        const answer = seoul.indexOf("Kim");
        return `김서방은 ${answer}에 있다`
    }
    console.log(solution(["Jane","Kim","Kam","Kin","cim","Klm"]));
}
console.log("------------------------------------------------------------------------");
{
    // 소수 찾기 (에라토스테네스의 체)
    function solution(n) {
        let range = Array(n - 1).fill().map((v, i) => i + 2);
        for (let i = 0; i < range.length; i++) {
            range = range.filter(v => v === range[i] || v % range[i]);
        }
        return range.length;
    }
    console.log(solution(10));
}
console.log("------------------------------------------------------------------------");
{
    // 수박수박수박수박
    function solution(n) {
        return '수박'.repeat(n).substr(0, n);
    }
    console.log(solution(3));
}
console.log("------------------------------------------------------------------------");
{
    // 시저 암호
    function solution(s, n) {
       return s.split('').map((l) => {
        return l === " "
        ? l
        : l.charCodeAt() + n > 122 || (l.charCodeAt() <= 90 && l.charCodeAt() + n > 90)
            ? String.fromCharCode((l.charCodeAt() + n) - 26)
            : String.fromCharCode(l.charCodeAt() + n);
       }).join('');
      }
    console.log(solution("ZzAa", 1));
}
console.log("------------------------------------------------------------------------");
{
    // 약수의 합
    function solution(n) {
       return Array(n).fill().map((v, i) => i + 1).reduce((a, c) => n % c ? a : a + c, 0)
      }
    console.log(solution(12));
}
console.log("------------------------------------------------------------------------");
{
    // 이상한 문자 만들기 
    function solution(s) {
        return s.split(' ').map(w => (
            w.split('').map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase())).join('')
        )).join(' ');
    }
    console.log(solution("try hello world"));
}
console.log("------------------------------------------------------------------------");
{
    // 자릿수 더하기
    function solution(n) {
        return String(n).split('').reduce((a, c) => a + +c, 0);
    }
    console.log(solution(142));
}
console.log("------------------------------------------------------------------------");
{
    // 자연수 뒤집어 배열로 만들기
    function solution(n) {
        return String(n).split('').reverse().map(v => +v);
    }
    console.log(solution(12345));
}
console.log("------------------------------------------------------------------------");
{
    // 정수 내림차순으로 배치하기
    function solution(n) {
        return String(n).split('').sort((p, c) => c - p).join('');
    }
    console.log(solution(118372));
}
console.log("------------------------------------------------------------------------");
{
    // 정수 제곱근 판별
    function solution(n) {
        return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1
    }
    console.log(solution(4));
}
console.log("------------------------------------------------------------------------");
{
    // 제일 작은 수 제거하기
    function solution(arr) {
        const min = Math.min(...arr);
        const r = arr.filter(v => v !== min);
        return r.length ? r : [-1];
    }
    console.log(solution([2,13,44,5,63,2,43]));
}
console.log("------------------------------------------------------------------------");
{
    // 짝수와 홀수
    function solution(n) {
        return n % 2 ? '홀' : '짝';
    }
    console.log(solution(10));
}
console.log("------------------------------------------------------------------------");
{
    // 최대공약수와 최소공배수
    function solution(n, m) {
        function u(n, m) {
            return m % n ? u(m % n, n) : n
        }
        const gcd = u(n, m);
        return [gcd, n * m / gcd];
    }
    console.log(solution(150, 1025));
}
console.log("------------------------------------------------------------------------");
{
    // 콜라츠 추측
    function solution(n, count=0) {
        return count === 500
        ? -1
        : n === 1
            ? count
            : solution(n % 2 ? n * 3 + 1 : n / 2, count + 1);
    }
    console.log(solution(16));
    console.log(solution(626331));
}
console.log("------------------------------------------------------------------------");
{
    // 평균 구하기
    function solution(arr) {
        return arr.reduce((a, c) => a + c / arr.length, 0);
    }
    console.log(solution([10,10,10,10,10,10]));
}
console.log("------------------------------------------------------------------------");
{
    // 하샤드 수
    function solution(x) {
        return !(x % String(x).split('').reduce((a, c) => a + c * 1, 0));
    }
    console.log(solution(12));
}
console.log("------------------------------------------------------------------------");
{
    // 행렬의 덧셈
    function solution(arr1, arr2) {
        return arr1.map((arr, 1));
    }
    console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]));
}

// https://www.zerocho.com/category/Algorithm/post/5b7a19b9337215001b3a1900

