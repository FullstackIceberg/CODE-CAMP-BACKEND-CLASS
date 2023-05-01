import coolSms from 'coolsms-node-sdk';
import 'dotenv/config'

export function checkPhone(myPhone){
    if(myPhone.length < 10 || myPhone.length > 11){
        console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!")
        return false
    } else {
        return true
    }
}

export function getToken(){
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    console.log(result)
    return result
}

export async function sendTokenToSMS(myPhone, token) {
    const SMS_KEY    = process.env.SMS_KEY 
    const SMS_SECRET = process.env.SMS_SECRET
    const SMS_SENDER = process.env.SMS_SENDER

    const mySms = coolSms.default;
    const messageService = new mySms(SMS_KEY, SMS_SECRET);
    const result = await messageService.sendOne({
        to: myPhone,
        from: SMS_SENDER,
        text: `[코드캠프] 안녕하세요?! 요청하신 인증번호는 [${token}] 입니다.`,
    });
    console.log(result);
}