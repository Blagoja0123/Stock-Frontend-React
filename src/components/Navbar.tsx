import '../style/navbar.scss';

export const Navbar = () =>{
    return (
        <div className="navigation">
            <div className="nav-container">
                <div className="brand">
                <a href="/">STOCK</a>
                </div>
                <nav>
                    <div className="nav-mobile">
                        <a id="nav-toggle" href="#!"><span></span></a>
                    </div>
                    <ul className="nav-list">
                        <li><a href="/">HOME</a></li>
                        <li><a href="#!">SHOP</a></li>
                        <li><a href="#!">ABOUT</a></li>
                        <li><a href="#!">CONTACT</a></li>
                        <li><a href="/user"><i className="fa-solid fa-user"></i></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;