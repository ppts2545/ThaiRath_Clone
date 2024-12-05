import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SlideShow.css'; // นำเข้าไฟล์ CSS เพื่อจัดการสไตล์

const SlideShow = () => {
    const [slides, setSlides] = useState([]); // State สำหรับเก็บข้อมูลสไลด์
    const [currentIndex, setCurrentIndex] = useState(0); // State สำหรับเก็บตำแหน่งปัจจุบัน

    // ดึงข้อมูลจาก Backend เมื่อ Component โหลดครั้งแรก
    useEffect(() => {
        axios.get('/slides') // เรียก API จาก Backend
            .then(response => {
                console.log('Fetched slides:', response.data); // Debug: แสดงข้อมูลที่ดึงมา
                setSlides(response.data); // ตั้งค่า slides
            })
            .catch(error => console.error('Error fetching slides:', error)); // Debug: แสดงข้อผิดพลาด
    }, []);

    // เลื่อนไปยังสไลด์ถัดไป
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    // เลื่อนไปยังสไลด์ก่อนหน้า
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="slideshow">
            {slides.length > 0 ? ( // ตรวจสอบว่ามี slides หรือไม่
                <>
                    <div className="slide">
                        {console.log('Current Image URL:', slides[currentIndex]?.image_url)} {/* Debug: URL ของภาพ */}
                        <img
                            src={slides[currentIndex]?.image_url}
                            alt={slides[currentIndex]?.title}
                        />
                    </div>
                    <div className="controls">
                        <button onClick={prevSlide}>Previous</button>
                        <button onClick={nextSlide}>Next</button>
                    </div>
                </>
            ) : (
                <p>Loading slides...</p> // กรณีไม่มี slides
            )}
        </div>
    );
};

export default SlideShow;