# T-ng-g-i-email
Tự Động gửi mail tới người khác

Chạy code trong terminal: node server.js
Để test xem nó có gửi đến mail k thì vào Postman
+ gắn localhost này vào: http://localhost:3000/send-email
+ và chọn Post
+ Tìm đến mục Body và chọn raw (JSON)
+ Sau đó bắt đầu test gửi mail:
{
"to": "anhnhtbh00862@fpt.edu.vn"  // chọn email muốn gửi thông tin đến
}
+ Và nhấn Send để test
+ Ở phần Response nếu có dòng True thì là đã gửi thành công.
