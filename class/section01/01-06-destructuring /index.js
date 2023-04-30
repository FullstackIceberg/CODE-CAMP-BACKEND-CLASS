// index.js

// 1. 일반변수 전달하기
function zzz(aaa){ // const aaa = "사과"
    console.log(aaa) // 사과
}

zzz("사과")

// 2. 객체 전달하기. 
function zzz(aaa){ // const aaa = basket
    console.log(aaa) // 객체
    console.log(aaa.apple) // 3
    console.log(aaa.banana) // 10
}

const basket = {
    apple: 3,
    banana: 10
}
zzz(basket)

// index.js

// 3. 객체 전달하기 => 구조분해할당 방식으로 전달하기
function zzz({ apple, banana }){ // const { apple, banana } = basket
    console.log(apple) // 3
    console.log(banana) // 10
}

zzz(basket)

// index.js

// 4. 객체 구조분해할당 방식으로 전달하기 + shorthand-property
// 매서드 호출부에서 넘긴 객체의 필드 순서가 변경되어도 데이터가 오염되지 않음.
function zzz({ banana, apple }){ // 순서 변경
    console.log(apple) // 3
    console.log(banana) // 10
}

const apple = 3
const banana = 10

// const basket = {
//     apple: apple,
//     banana: banana
// }
// Shorthand property 적용
// const basket = { apple, banana }

zzz({ apple, banana }) // 객체 그대로 넘기기

//////////////////////////////////////////////////////
const user = {
    name: '철수',
    age: 13,
    school: '다람쥐초등학교',
    createdAt: '2010-09-07',
}

// 객체 구조분해할당
const {name, age, school, createdAt} = user;
console.log(name);
console.log(age);
console.log(school);
console.log(createdAt);

// 배열 구조분해할당
const classmates = ['철수', '영희', '훈이'];
const [child1, child2, child3] = classmates;
console.log(child1);
console.log(child2);
console.log(child3);