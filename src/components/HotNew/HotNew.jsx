import React from "react"
import './HotNew.css'

function HotNew(){

    return(
        <div className="HotNew-Container">
            <div className="header">
                <div className="image-container">
                <img src="../../../public/uploads/HotNewHeader.png" alt="" className="header"/>
                </div>
            </div>           
            <div className="container">
                
                <div className="bigNew">
                    <img src="../../../public/uploads/bigNew1.webp" alt="" className="bigNewImage"/> 
                    <div class="link-overlay">
                        <span className="time">17:44 น.</span>
                        <br />
                        <a href="" className="news-title">ไม่ลืมคนใต้ ! "โจนาธาร" เปิดประมูล 2 สิ่งที่รักช่วยน้ำท่วม</a>           
                    </div> 
                </div>
                <div className="groups-New">
                    <div className="component">
                        <img src="" alt="" />
                    </div>
                    <div className="component">
                        <img src="" alt="" />
                    </div> 
                    <div className="component">
                        <img src="" alt="" />
                    </div> 
                    <div className="component">
                        <img src="" alt="" />
                    </div>                
                </div>
            </div>
        </div>
        
    )
}

export default HotNew