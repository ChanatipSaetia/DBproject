# DBProject

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [MySQL Server](https://dev.mysql.com/downloads/mysql/)

## Installation

1. Clone โปรเจ็กนี้ลงเครื่อง
2. `cd` ไปที่โฟลเดอร์โปรเจ็ก แล้วรัน `npm install` เพื่อติด dependencies ที่ระบุไว้ใน `package.json`
3. ก็อปปี้ไฟล์ `config.sample.js` เป็นชื่อ `config.js` และภายในไฟล์นั้น ให้แก้ `username`, `password` และ `databaseName` ของ MySQL

ถ้าหากมีการเปลี่ยนแปลง `package.json` ใดๆ กรุณารัน `npm install` เพื่ออัพเดท dependencies ด้วย (ถ้าให้ปลอดภัย รันทุกครั้งที่ sync หรือ pull จาก Git ไปเลย)

## Database Initialization

1. ตรวจสอบว่าไม่มี database ชื่อ `dbproject` อยู่
2. รันไฟล์ SQL ใน `./tools/dbseed/tables_only.sql` ใน Workbench
3. ตรวจสอบว่ามีทั้งหมด 16 tables และไม่มีข้อมูลใดๆ อยู่ภายใน
4. เซ็ตไฟล์ `config.js` (ที่อยู่ในหัวข้อ Installation ด้านบน) ให้ถูกต้อง
5. รัน `npm run seed`
6. ตรวจสอบใน Workbench อีกรอบว่ามีข้อมูลเรียบร้อยแล้ว

## Running Web Server

ใช้คำสั่ง `npm start` จะรันตัว web server และตัว Gulp build system ให้ (ใช้ในการ build ไฟล์ .css และ .js)

ถ้าหากแก้โค้ด JavaScript ที่เป็นฝั่ง server ใดๆ เซิร์ฟเวอร์จะ recompile ตัวเองอัตโนมัติ

ถ้าหากแก้โค้ด JavaScript ที่เป็นฝั่ง client หรือไฟล์ SCSS ใดๆ Gulp จะ build ให้ใหม่อัตโนมัติ

## Development Hint

1. Routes ในระดับบนสุดอยู่ที่ไฟล์ `/routes.js`
2. แต่ละ Router ย่อยจะอยู่ที่โฟลเดอร์ `/routes`
3. ไฟล์ Views อยู่ที่โฟลเดอร์ `/views`
4. ไฟล์ SCSS และ JS อยู่ที่ `/public_src`

> Note: ไม่ควรแก้ของที่อยู่ในโฟลเดอร์ `public` ถ้าหากเป็นไฟล์จำพวก `.css` หรือ `.js` ให้สร้างไฟล์ในโฟลเดอร์ `public_src` แทน โดยนามสกุลไฟล์จะเป็น `.scss` แทน `.css` เมื่อรัน `npm install` ตัว Gulp จะก็อบไฟล์ไปลงโฟลเดอร์ `public` ให้เอง

## Notes

### Why SCSS

เราใช้ SCSS แทน CSS เนื่องจาก

1. SCSS เป็น superset ของ CSS กล่าวคือ ทุกโค้ดที่เป็น CSS ก็เป็น SCSS ด้วย ทำให้ไม่จำเป็นต้องเรียน SCSS เพิ่มเติมถ้าหากใครไม่อยากใช้
2. มันสามารถแก้ config ของ Bootstrap ได้ง่ายกว่า
3. มันมีระบบตัวแปร ทำให้สามารถคุมโทนของเว็บได้ง่ายกว่า (เช่น ใช้ตัวแปรเดียวกันอ้างถึงสีเดียวกัน)