alert(
  "Selamat datang di website saya Kak Rizal, maaf belum maksimal dikarenakan minggu ini full tugas lapangan"
);

//conditions loop
for (let z = 10; z >= 1; z--) {
  if (z % 2 !== 0) console.log("data ke - ", z);
}

//while loop
let x = 1;
while (x <= 10) {
  if (x % 2 !== 0) {
    console.log("data x ke - ", x);
  }
  x++;
}

//do while

let y = 1;
do {
  if (y % 2 !== 0) {
    console.log("data x ke - ", y);
  }
  y++;
} while (y <= 10);

//New Function
const sum1 = new Function("x", "y", "console.log(x+y)");

//Standar Function
function sum2(x, y) {
  console.log(x + y);
}

//Arrow Function
const sum3 = (x, y) => {
  console.log(x + y);
};

sum1(1, 1);
sum2(2, 2);
sum3(3, 3);

//Array

const ArraySaya = ["1️⃣", "2️⃣", "3️⃣"];
console.log(ArraySaya);

const arrayKamu = [];
arrayKamu[0] = "😃";
arrayKamu[1] = "😎";
arrayKamu[2] = "😻";

console.log(arrayKamu);

const arrayKita = new Array("🏊‍♀️");
