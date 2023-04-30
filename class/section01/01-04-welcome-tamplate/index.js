function getWelcomeTemplate({ name, age, school, createdAt }){
  const myTemplate = `
      <html>
          <body>
              <h1>${name}님 가입을 환영합니다!!!</h1>
              <hr />
              <div>이름: ${name}</div>
              <div>나이: ${age}</div>
              <div>학교: ${school}</div>
              <div>가입일: ${createdAt}</div>
          </body>
      </html>
  `
  console.log(myTemplate)
}

const name = "철수"
const age = 10
const school = "공룡초등학교"
const createdAt = "2022-10-12"

// 아래 함수와 같이 인자값 포맷을 맞추지 못하는 상황 발생 할 수 있기에
// 데이터 상의 오류를 방지하고자 실무에서는 구조분해할당을 많이 사용합니다.
// getWelcomeTemplate(name, school, createdAt);
getWelcomeTemplate({ name, age, school, createdAt });