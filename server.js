const express = require('express');
const nodemailer = require('nodemailer');
const schedule = require('node-schedule');

const app = express();
const port = 3000;

// Thông tin email gửi
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ngtanh2112@gmail.com', // Email gửi
    pass: 'tcrc jtih bubu ydee',       // Mật khẩu ứng dụng
  },
});

// Hàm gửi email
const sendEmail = () => {
  const mailOptions = {
    from: 'ngtanh2112@gmail.com',
    to: 'trang1322k4@gmail.com , anhnhtbh00862@fpt.edu.vn',
    subject: 'Chúc Mừng Năm Mới',
    text: `HELLO lần này lại là Anh này -))), trời ơi lần trước bị quê một cục luôn á, nhưng mà làm gì có cái gì lần đầu là suôn sẻ đúng hong. Chả là lúc trước anh có lỡ tay một chút xíu gửi email cho em bị lộ hết thông tin mật roài, èo ơi tối hôm lỡ gửi cho em í về nhà đắp chăn nằm giãy đành đạch vì ngại -)), nên là lần này e đọc được tin nhắn vào lúc Tết í thì là anh đã thành công rồi ấy nhá, không còn là lập trình viên lỏd nữa  -))) hoặc vẫn lỏd ... Kể nể cũng đủ rồi bây giờ vào công việc chính này: 

Một mùa xuân nữa lại đến, Anh muốn gửi đến em những lời chúc chân thành nhất.
Chúc em và gia đình một năm mới An Khang - Thịnh Vượng, tràn đầy niềm vui, hạnh phúc và sức khỏe dồi dào. Mong rằng mọi ước nguyện của em sẽ trở thành hiện thực, công việc luôn thuận buồm xuôi gió, cuộc sống luôn ngập tràn yêu thương và đặc biệt là cười nhiều hơn buồn.
Hy vọng rằng năm 2025 sẽ là một năm đầy thành công và hạnh phúc với tất cả chúng ta.❤️
HAPPY NEW YEAR 2025.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

// Thay đổi thời gian để gửi email ngay lập tức (ví dụ: 5 giây sau khi chạy server)
const scheduleDate = new Date(Date.now() + 5000); // Gửi sau 5 giây
schedule.scheduleJob(scheduleDate, () => {
  console.log('Sending email...');
  sendEmail();
});


// API gửi email qua Postman
app.post('/send-email', express.json(), (req, res) => {
    const { to } = req.body; // Lấy email người nhận từ request body
    if (!to) {
      return res.status(400).json({ error: 'Recipient email (to) is required' });
    }
  
    sendEmail(to)
      .then((info) => res.json({ success: true, info }))
      .catch((error) => res.status(500).json({ success: false, error: error.message }));
  });

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



// const express = require('express');
// const nodemailer = require('nodemailer');
// const app = express();
// const port = 3000;

// // Cấu hình transporter cho email gửi đi
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'ngtanh2112@gmail.com', // Email gửi
//     pass: 'tcrc jtih bubu ydee',       // Mật khẩu ứng dụng
//   },
// });

// // Hàm gửi email
// const sendEmail = (toEmail) => {
//   const mailOptions = {
//     from: 'ngtanh2112@gmail.com',
//     to: toEmail,
//     subject: 'Chúc Mừng Năm Mới',
//     text: `HELLO là Anh này, Đây là một dòng tin nhắn mà anh đã lập trình từ lúc trước và gửi nó cho em vào giao thừa này anh muốn chúc em đón một năm mới với những khởi đầu tươi sáng, gửi đến em lời chúc yêu thương nhất. Mong rằng trong năm nay, em sẽ nhận được mọi điều niềm vui và mong rằng em sẽ cười nhiều hơn là buồn. Chúc em một năm mới đầy sức khỏe, thành công và mọi ước mơ đều trở thành hiện thực nhé❤️`,
//   };

//   return transporter.sendMail(mailOptions);
// };

// // API gửi email qua Postman
// app.post('/send-email', express.json(), (req, res) => {
//     console.log('Request received at /send-email');
//     console.log('Request body:', req.body);
    
//     const { to } = req.body;
//     if (!to) {
//       console.log('Missing recipient email');
//       return res.status(400).json({ error: 'Recipient email (to) is required' });
//     }
  
//     sendEmail(to)
//       .then((info) => res.json({ success: true, info }))
//       .catch((error) => {
//         console.error('Error sending email:', error.message);
//         res.status(500).json({ success: false, error: error.message });
//       });
//   });
  

// // Khởi động server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
