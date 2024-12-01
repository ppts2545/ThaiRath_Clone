import React from "react"
import "./NavCategory.css"


function NavCategory(){

    return(
        <div class="NavCategory-Container">
            <a href="">ข่าว</a>
            <div class="dropdown">
                <a href="#">วิดีโอ</a>
                <div class="dropdown-content">
                <a href="#link1">Link 1</a>
                <a href="#link2">Link 2</a>
                <a href="#link3">Link 3</a>
                </div>
            </div>
            <a href="">หนังสือพิมพ์</a>
            <div class="dropdown">
                <a href="#">ไทยรัฐทีวี</a>
                <div class="dropdown-content">
                <a href="#link1">Link 1</a>
                <a href="#link2">Link 2</a>
                <a href="#link3">Link 3</a>
                </div>
            </div>
            <div class="dropdown">
                <a href="#">ไลฟ์สไตล์</a>
                <div class="dropdown-content">
                <a href="#link1">Link 1</a>
                <a href="#link2">Link 2</a>
                <a href="#link3">Link 3</a>
                </div>
            </div>
            <div class="dropdown">
                <a href="#">กีฬา</a>
                <div class="dropdown-content">
                <a href="#link1">Link 1</a>
                <a href="#link2">Link 2</a>
                <a href="#link3">Link 3</a>
                </div>
            </div>
            <div class="dropdown">
                <a href="#">บันเทิง</a>
                <div class="dropdown-content">
                <a href="#link1">Link 1</a>
                <a href="#link2">Link 2</a>
                <a href="#link3">Link 3</a>
                </div>
            </div>
            <div class="dropdown">
                <a href="#">ดวง</a>
                <div class="dropdown-content">
                <a href="#link1">Link 1</a>
                <a href="#link2">Link 2</a>
                <a href="#link3">Link 3</a>
                </div>
            </div>
            <div class="dropdown">
                <a href="#">หวย</a>
                <div class="dropdown-content">
                <a href="#link1">Link 1</a>
                <a href="#link2">Link 2</a>
                <a href="#link3">Link 3</a>
                </div>
            </div>
            <div class="dropdown">
                <a href="#">นิยาย</a>
                <div class="dropdown-content">
                <a href="#link1">Link 1</a>
                <a href="#link2">Link 2</a>
                <a href="#link3">Link 3</a>
                </div>
            </div>
            <div class="dropdown">
                <a href="#">ชอปปิ้ง</a>
                <div class="dropdown-content">
                <a href="#link1">Link 1</a>
                <a href="#link2">Link 2</a>
                <a href="#link3">Link 3</a>
                </div>
            </div>
            <a href="">MONEY</a>
            <a href="">NIRROR</a>
            <a href="">Thairath+</a>
            <a href="">Live</a>
        </div>
    )
}

export default NavCategory
