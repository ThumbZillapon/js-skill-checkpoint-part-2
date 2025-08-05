const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้s
// 1. ให้กรองข้อมูลนักเรียนที่มีคะแนนมากกว่า 50
const moreThan50 = students.filter((student) => student.score > 50);
//console.log(moreThan50);
// 2. ให้เพิ่มคะแนนนักเรียนแต่ละคนที่ผ่านการกรองในข้อหนึ่ง 10%
const add10Percent = moreThan50.map((student) => student.score * 1.1);
//console.log(add10Percent);
// 3. ให้หาผลรวมของคะแนนทั้งหมดจากข้อ 2
const total = add10Percent.reduce((acc, curr) => acc + curr, 0);
//console.log(total);
// 4. ให้นำคะแนนที่รวมแล้ว มาแสดงบนหน้าจอ Console ในรูปแบบ
// `"Total score is <ค่าของคะแนนที่รวมแล้ว>"` (ห้าม Hard-Code ค่าเข้าไปใน String โดยตรง)
console.log(`"Total score is ${total}"`);