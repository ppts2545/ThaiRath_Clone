const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path'); // นำเข้าโมดูล path
const app = express();
const PORT = 3000;

app.use(cors());

//ตั้งค่าการเชื่อมต่อฐานข้อมูล
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password', // รหัสผ่านของคุณ
    database: 'Thairath_clone'
});

db.connect(err => {
    if (err) throw err;
    console.log('Database connected!');
});

// Route ทดสอบ
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Route ดึงข้อมูล slides พร้อมแปลงชื่อไฟล์ใน image_url เป็น URL เต็ม
app.get('/slides', (req, res) => {
    const query = 'SELECT id, title, description, image_url FROM slides';
    db.query(query, (err, results) => {
        if (err) throw err;

        // แปลงชื่อไฟล์ image_url ให้เป็น URL เต็ม
        const formattedResults = results.map(row => ({
            ...row,
            image_url: `http://localhost:3000/uploads/${row.image_url}` // เพิ่ม '/uploads/' ใน URL
        }));

        res.json(formattedResults); // ส่งข้อมูลกลับไปยัง React
    });
});

// เสิร์ฟไฟล์ static จากโฟลเดอร์ 'public/uploads'
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// เริ่มต้นเซิร์ฟเวอร์
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));