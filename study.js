//Hiển thị hộp thoại
//alert("Xin chào bạn khỏe không ?");
console.log("Thông điệp chạy trên Console");
//Hiển thị hộp thoại nhập
//prompt("Nhập tên của bạn : ");
//Biến
var myNumber;
let myPhone;
const myName = "Admin";     //Biến sẽ không thể thay đổi khi đã gán rong suốt chương trình
//Kết hợp
//myNumber = prompt("Nhập số bạn yêu thích : ");      //Ép dữ liệu
console.log("Số yêu thích của bạn là " + myNumber);
//Kiểu dữ liệu - String (chuỗi ký tự), Number (số nguyên + số thực), Boolean (True hoặc False), Undefined (biến chưa đc gán), Null
let myTestString = `Welcome`;
console.log(myTestString);
console.log(typeof myTestString);   //typeof hiển thị kiểu dữ liệu
let soA = 13;
let soB = 26;
let a = 5, b = 6 , c = a + b;
//Cách xuất dữ liệu ra
console.log("1/2 của " + soB + " là " + soA );
console.log("1/2 của" , soB , "là" , soA );
console.log(`1/2 của ${soB} là ${soA}`);
console.log(`%s + %s = %s`, a , b , c );
//Độ Ưu tiên
//1. Là dấu ()
//2. Là từ phải qua trái
let x = y = 25;     //25 gán cho y trước => y = 25 sau đó mới gán y = x => x = 25
// a ** b;
// x += y;
// x **= y;
// x *= y;
// x /= y;
// x %= y;
// x <<= y;
// x >>= y;
//3. Là từ trái sang phải - các trường hợp còn lại
//Ép kiểu dữ liệu 
let nA = "8";       //String
let nB = 5;         //Number
let nC = "6";
let kqAB = nA + nB; //String
console.log("A + B = " + kqAB); //String
console.log(`A - B = ${nA - nB}`);  //Number do nó sẽ chuyển A thành Number để phù hợp
let KqAB = parseInt(nA) + nB;   //Number
console.log("A + B = %s" , KqAB);
let kqAC = nA * Number(nC);
console.log("A * C =", kqAC);       //Number
let PI = Math.PI;    //PI = 3.14 - abs trị tuyệt đối - pow mũ - sqrt căn bậc hai - ceil làm tròn lên - floor làm tròn xuống - round làm tròn 0.5 - min - max
let soThucA = 5.788888855674
console.log(soThucA.toFixed(2));        //Ra 5.79 - Hàm rút gọn làm tròn toFixed() nhưng sau khi dùng kiểu trả về là String
console.log(Number.isNaN("abc"));      //Hàm kiềm tra lỗi NaN
// <!DOCTYPE html>
// <html lang="vi">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//   <title>Quiz Bảng Chữ Cái Nhật</title>
//   <link rel="stylesheet" href="style.css"/>
// </head>
// <body>
//   <div class="quiz-wrapper">
//     <h1>Quiz Bảng Chữ Cái Nhật</h1>
//     <div id="quiz-container"></div>
//   </div>

//   <!-- Modal thông báo -->
//   <div id="modal" class="modal">
//     <div class="modal-content">
//       <p id="modal-message"></p>
//       <button id="modal-close">OK</button>
//     </div>
//   </div>
//   <div class="background-shapes">
//     <div class="shape shape1"></div>
//     <div class="shape shape2"></div>
//     <div class="shape shape3"></div>
//     <div class="shape shape4"></div>
//     <div class="shape shape5"></div>
//     <div class="shape shape6"></div>
//   </div>
//   <script src="quizData.js"></script>
//   <script src="main.js"></script>
// </body>
// </html>
