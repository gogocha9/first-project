"use strict";
{
  // 2021년 a월 b일은 무슨 요일일까요?
  function solution(a, b) {
    return ["일", "월", "화", "수", "목", "금", "토"][
      new Date(2021, a - 1, b).getDay()
    ];
  }
  console.log(solution(12, 31));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 같은 숫자는 싫어
  function solution(arr) {
    return arr.filter((v, i) => v != arr[i + 1]);
  }

  console.log(solution([1, 1, 2, 2, 2, 3, 3, 4, 5, 5, 6, 8, 8]));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 나누어 떨어지는 숫자 배열
  function solution(arr, divisor) {
    const answer = arr.filter((el) => el % divisor === 0);
    return answer.length ? answer.sort((p, c) => p - c) : [-1];
  }

  console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
  console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 두 정수 사이의 합
  function solution(a, b) {
    return ((a + b) * ((a > b ? a - b : b - a) + 1)) / 2;
  }

  console.log(solution(11, 1));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 문자열 내 마음대로 정렬하기
  function solution(strings, n) {
    return strings.sort((p, c) =>
      p[n] === c[n] ? p.localeCompare(c) : p[n].localeCompare(c[n])
    );
  }

  console.log(solution(["aez", "cdx", "abce", "abcd"], 2));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 문자열 내 p와 y의 개수(함수형 메서드)
  function solution(s) {
    const p = s.split("").filter((v) => ["p", "P"].includes(v));
    const y = s.split("").filter((v) => ["y", "Y"].includes(v));
    return p.length === y.length;
  }

  console.log(solution("PpayYayP"));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 문자열 내 p와 y의 개수(정규표현식)
  function solution(s) {
    return s.replace(/p/gi, "").length == s.replace(/y/gi, "").length;
  }

  console.log(solution("PpayYayP"));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 문자열 내림차순으로 배치하기
  function solution(s) {
    return s
      .split("")
      .sort((p, c) => c.charCodeAt() - p.charCodeAt())
      .join("");
  }
  console.log(solution("ZAazd"));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 문자열 다루기 기본
  function solution(s) {
    return /^[0-9]+$/.test(s) && [4, 6].includes(s.length);
  }
  console.log(solution("1234"));
  console.log(solution("123456"));
  console.log(solution("12345a"));
  console.log(solution("12345"));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 서울에서 김서방 찾기
  function solution(seoul) {
    const answer = seoul.indexOf("Kim");
    return `김서방은 ${answer}에 있다`;
  }
  console.log(solution(["Jane", "Kim", "Kam", "Kin", "cim", "Klm"]));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 소수 찾기 (에라토스테네스의 체)
  function solution(n) {
    let range = Array(n - 1)
      .fill()
      .map((v, i) => i + 2);
    for (let i = 0; i < range.length; i++) {
      range = range.filter((v) => v === range[i] || v % range[i]);
    }
    return range.length;
  }
  console.log(solution(10));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 수박수박수박수박수
  function solution(n) {
    return "수박".repeat(n).substr(0, n);
  }
  console.log(solution(3));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 시저 암호
  function solution(s, n) {
    return s
      .split("")
      .map((l) => {
        if (l === " ") {
          return l;
        }

        const tmp = l.charCodeAt();
        return l.toUpperCase().charCodeAt() + n > 90
          ? String.fromCharCode(tmp + n - 26)
          : String.fromCharCode(tmp + n);
      })
      .join("");
  }
  console.log(solution("Zz Aa", 1));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 약수의 합
  function solution(n) {
    return Array(n)
      .fill()
      .map((v, i) => i + 1)
      .reduce((a, c) => (n % c ? a : a + c), 0);
  }
  console.log(solution(12));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 이상한 문자 만들기
  function solution(s) {
    return s
      .split(" ")
      .map((w) =>
        w
          .split("")
          .map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase()))
          .join("")
      )
      .join(" ");
  }
  console.log(solution("try hello world"));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 자릿수 더하기
  function solution(n) {
    return String(n)
      .split("")
      .reduce((a, c) => a + +c, 0);
  }
  console.log(solution(142));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 자연수 뒤집어 배열로 만들기
  function solution(n) {
    return String(n)
      .split("")
      .reverse()
      .map((v) => +v);
  }
  console.log(solution(12345));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 정수 내림차순으로 배치하기
  function solution(n) {
    return String(n)
      .split("")
      .sort((p, c) => c - p)
      .join("");
  }
  console.log(solution(118372));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 정수 제곱근 판별
  function solution(n) {
    return Math.sqrt(n) === parseInt(Math.sqrt(n))
      ? (Math.sqrt(n) + 1) ** 2
      : -1;
  }
  console.log(solution(4));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 제일 작은 수 제거하기
  function solution(arr) {
    const min = Math.min(...arr);
    const r = arr.filter((v) => v !== min);
    return r.length ? r : [-1];
  }
  console.log(solution([2, 13, 44, 5, 63, 2, 43]));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 짝수와 홀수
  function solution(n) {
    return n % 2 ? "홀" : "짝";
  }
  console.log(solution(10));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 최대공약수와 최소공배수
  function solution(n, m) {
    function u(n, m) {
      return m % n ? u(m % n, n) : n;
    }
    const gcd = u(n, m);
    return [gcd, (n * m) / gcd];
  }
  console.log(solution(150, 1025));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 콜라츠 추측
  function solution(n, count = 0) {
    return count === 500
      ? -1
      : n === 1
      ? count
      : solution(n % 2 ? n * 3 + 1 : n / 2, count + 1);
  }
  console.log(solution(16));
  console.log(solution(626331));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 평균 구하기
  function solution(arr) {
    return arr.reduce((a, c) => a + c / arr.length, 0);
  }
  console.log(solution([10, 10, 10, 10, 10, 10]));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 하샤드 수
  function solution(x) {
    return !(
      x %
      String(x)
        .split("")
        .reduce((a, c) => a + c * 1, 0)
    );
  }
  console.log(solution(12));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 핸드폰 번호 가리기
  function solution(phone_number) {
    return phone_number.replace(/\d(?=\d{4})/g, "*");
  }
  console.log(solution("01054477646"));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 행렬의 덧셈
  function solution(arr1, arr2) {
    return arr1.map((arr, i) => arr.map((v, j) => v + arr2[i][j]));
  }
  console.log(
    solution(
      [
        [1, 2],
        [2, 3],
      ],
      [
        [3, 4],
        [5, 6],
      ]
    )
  );
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // x만큼 간격이 있는 n개의 숫자
  function solution(x, n) {
    return Array(n)
      .fill(x)
      .map((v, i) => (i + 1) * v);
  }
  console.log(solution(2, 5));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 직사각형 별찍기
  function solution(x, y) {
    return Array(y)
      .fill()
      .map(() => "*".repeat(x))
      .join("\n");
  }
  console.log(solution(5, 3));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // [카카오 인턴] 키패드 누르기
  function solution(numbers, hand) {
    let answer = "";

    const center = [2, 5, 8, 11];
    let location_L = 10;
    let location_R = 12;
    let dist_L = 0;
    let dist_R = 0;

    for (let i = 0; i < numbers.length; i++) {
      let val = numbers[i];
      if (numbers[i] == 0) {
        val = 11;
      }
      if (val == 1 || val == 4 || val == 7) {
        answer += "L";
        location_L = val;
      } else if (val == 3 || val == 6 || val == 9) {
        answer += "R";
        location_R = val;
      } else {
        dist_L =
          center.indexOf(location_L) != -1
            ? Math.abs(val - location_L) / 3
            : Math.abs(val - 1 - location_L) / 3 + 1;
        dist_R =
          center.indexOf(location_R) != -1
            ? Math.abs(val - location_R) / 3
            : Math.abs(val + 1 - location_R) / 3 + 1;

        if (dist_L == dist_R) {
          if (hand == "right") {
            answer += "R";
            location_R = val;
          } else {
            answer += "L";
            location_L = val;
          }
        } else if (dist_L > dist_R) {
          answer += "R";
          location_R = val;
        } else {
          answer += "L";
          location_L = val;
        }
      }
    }
    return answer;
  }
  console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
  console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
  console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 완주하지 못한 선수
  function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for (var i = 0; i < participant.length; i++) {
      if (participant[i] !== completion[i]) {
        return participant[i];
      }
    }
  }
  console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
  console.log(
    solution(
      ["marina", "josipa", "nikola", "vinko", "filipa"],
      ["josipa", "filipa", "marina", "nikola"]
    )
  );
  console.log(
    solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
  );
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 체육복
  function solution(n, lost, reserve) {
    let answer = 0;
    let hasUniform = new Array(n).fill(1);

    for (let i = 0; i < lost.length; i++) {
      hasUniform[lost[i] - 1]--;
    }

    for (let i = 0; i < reserve.length; i++) {
      hasUniform[reserve[i] - 1]++;
    }

    for (let i = 0; i < hasUniform.length; i++) {
      if (hasUniform[i] === 0) {
        if (hasUniform[i - 1] === 2) {
          hasUniform[i]++;
          hasUniform[i - 1]--;
        } else if (hasUniform[i + 1] === 2) {
          hasUniform[i]++;
          hasUniform[i + 1]--;
        }
      }

      if (hasUniform[i] >= 1) {
        answer++;
      }
    }

    return answer;
  }
  console.log(solution(5, [2, 4], [1, 3, 5]));
  console.log(solution(5, [2, 4], [3]));
  console.log(solution(3, [3], [1]));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 소수 만들기
  function solution(nums) {
    let answer = 0;
    const range = nums.length;

    for (let i = 0; i < range - 2; i++) {
      for (let j = i + 1; j < range - 1; j++) {
        for (let k = j + 1; k < range; k++) {
          if (isPrime(nums[i] + nums[j] + nums[k])) {
            answer++;
          }
        }
      }
    }
    return answer;
  }

  const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };
  console.log(solution([1, 2, 3, 4]));
  console.log(solution([1, 2, 3, 4]));
  console.log(solution([1, 2, 7, 6, 4]));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // K번째 수
  function solution(array, commands) {
    let answer = [];

    for (let i = 0; i < commands.length; i++) {
      let list = array
        .slice(commands[i][0] - 1, commands[i][1])
        .sort((p, c) => p - c);
      answer.push(list[commands[i][2] - 1]);
    }
    return answer;
  }
  console.log(
    solution(
      [1, 5, 2, 6, 3, 7, 4],
      [
        [2, 5, 3],
        [4, 4, 1],
        [1, 7, 3],
      ]
    )
  );
}

console.log(
  "------------------------------------------------------------------------"
);
{
  // 음향 더하기
  function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
      if (signs[i] === true) {
        answer = answer + absolutes[i];
      } else {
        answer = answer - absolutes[i];
      }
    }
    return answer;
  }
  console.log(solution([4, 7, 12], [true, false, true]));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 신규 아이디 추천
  function solution(new_id) {
    new_id = new_id
      .toLowerCase()
      .replace(/[^\w\.\-]/g, "")
      .replace(/[\.]{2,}/g, ".")
      .replace(/^\./, "")
      .replace(/\.$/, "");
    if (!new_id) {
      new_id = "a";
    }
    if (new_id.length >= 16) {
      new_id = new_id.slice(0, 15).replace(/\.$/, "");
    }
    if (new_id.length <= 2) {
      new_id = new_id.padEnd(3, new_id[new_id.length - 1]);
    }
    return new_id;
  }
  console.log(solution("...!@BaT#*..y.abcㅎㅇdefghijklm"));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 모의고사
  function solution(answers) {
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const result = [0, 0, 0];
    const length = answers.length;

    for (let i = 0; i < length; i++) {
      if (one[i % 5] === answers[i]) result[0]++;
      if (two[i % 8] === answers[i]) result[1]++;
      if (three[i % 10] === answers[i]) result[2]++;
    }
    const answer = [];
    const maxValue = Math.max(...result);
    let index = 0;
    for (let i = 0; i < 3; i++) {
      if (maxValue === result[i]) {
        answer[index] = i + 1;
        index++;
      }
    }
    return answer;
  }
  console.log(solution([1, 2, 3, 4, 5]));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 약수의 개수와 덧셈
  function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
      if (Math.sqrt(i) % 1 === 0) answer -= i;
      else answer += i;
    }
    return answer;
  }
  console.log(solution(13, 17));
}
console.log(
  "------------------------------------------------------------------------"
);
{
  // 부족한 금액 계산하기
  function solution(price, money, count) {
    let total = 0;
    for (let i = 1; i <= count; i++) {
      total += price * i;
    }
    return total < money ? 0 : total - money;
  }
  console.log(solution(3, 20, 4));
}

console.log(
  "------------------------------------------------------------------------"
);
{
  // 부족한 금액 계산하기 - 가우스 공식
  function solution(price, money, count) {
    const tmp = (price * count * (count + 1)) / 2 - money;
    return tmp > 0 ? tmp : 0;
  }

  console.log(solution(3, 20, 4));
}

console.log(
  "------------------------------------------------------------------------"
);
{
  // 나머지가 1이 되는 수 찾기
  function solution(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 1) return i;
    }
  }

  console.log(solution(10));
  console.log(solution(12));
}

console.log(
  "------------------------------------------------------------------------"
);
{
  // 정수 제곱근 판별 2
  function solution(n) {
    return Math.sqrt(n) % 1 === 0 ? (Math.sqrt(n) + 1) ** 2 : -1;
  }

  console.log(solution(121));
  console.log(solution(3));
}

console.log(
  "------------------------------------------------------------------------"
);
{
  // 내적
  function solution(a, b) {
    let answer = 0;
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
      sum = a[i] * b[i];
      answer += sum;
    }
    return answer;
  }

  console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
  console.log(solution([-1, 0, 1], [1, 0, -1]));
}

// https://www.zerocho.com/category/Algorithm/post/5b7bce15b35bf5001b940db9
// https://programmers.co.kr/learn/challenges
