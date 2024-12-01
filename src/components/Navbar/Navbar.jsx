
function Navbar() {

    return(
        <nav className="navbar">
            <div className="left-items">
                <button class="menu-toggle" aria-label="Toggle navigation">&#9776;</button>
            </div>
             <div className="logo">
                <img src="/public/uploads/logo.png" alt="" />
            </div>
            <div className="right-items">
                <a href=""><img src="" alt="" /></a>
            </div>
        </nav>
    )
}

export default Navbar