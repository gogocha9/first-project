const nodemailer = require('nodemailer');
const email = {
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "56a4f2217d140a",
          pass: "eaeb34046eedbe"
        }
      }

const send = async(option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error) {
            console.log(error);
        } else {
            console.log(info);
            return info.response;
        }
    });
}

let email_data = {
    from: "gogocha9@naver.com",
    to: "gogocha9@naver.com",
    subject: "테스트 메일 입니다.",
    text: "node.js 한시간만에 끝내보자."
}

send(email_data);