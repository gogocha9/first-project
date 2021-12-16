"use strict";
{
    // 2016년 a월 b일은 무슨 요일일까요?
    function solution(a, b) {
        return ['일', '월', '화', '수', '목', '금', '토'][new Date(2021, a, b).getDay()];
    }
    console.log(solution(12, 16));
}
console.log("------------------------------------------------------------------------");
{
    // 같은 숫자는 싫어
    function solution(arr) {
        return arr.filter((v, i) => v !== arr[i + 1]);
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
    // 소수 찾기
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