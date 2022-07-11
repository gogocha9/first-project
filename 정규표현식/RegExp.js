// 선언 방법
let pattern1 = /a/;
let pattern2 = new RegExp('a');

// 정규표현식 메소드 실행

console.log(pattern1.exec('abcde'));
console.log(pattern1.test('abcde'));