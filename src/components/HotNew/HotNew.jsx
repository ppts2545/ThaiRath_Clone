import React from "react";
import "./HotNew.css";

function HotNew() {
    return (
        <div className="HotNew-Container">
            <div className="image-container">
                    <img
                        src="../../../public/uploads/HotNewHeader.png"
                        alt="Hot New Header"
                        className="header"
                    />
            </div>

            <div className="container">

                {/* Big News Section */}
                <div className="bigNew">
                    <img
                        src="../../../public/uploads/bigNew1.webp"
                        alt="Big News"
                        className="bigNewImage"
                    />
                    <div className="link-overlay">
                        <span className="time">17:44 น.</span>
                        <br />
                        <a
                            href="#"
                            className="news-title"
                        >
                            ไม่ลืมคนใต้ ! "โจนาธาร" เปิดประมูล 2 สิ่งที่รักช่วยน้ำท่วม
                        </a>
                    </div>
                </div>

                {/* Group News Section */}
                <div className="groups-New">
                    {[
                        "img-component1-groupnew.webp",
                        "img-component2-groupnew.webp",
                        "img-component3-groupnew.webp",
                        "img-component4-groupnew.webp",
                    ].map((img, index) => (
                        <div className="component" key={index}>
                            <img
                                src={`../../../public/uploads/${img}`}
                                alt={`Group News ${index + 1}`}
                            />
                            <div>
                                <a href="#">ข่าวที่ {index + 1}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HotNew;