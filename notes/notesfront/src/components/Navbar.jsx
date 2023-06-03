
const Navbar = () => {
    return (
        <div>
            <nav className="navigation-outerdiv">
                <div className="logo-cointainer">
                    <div><i class=" hover uil uil-bars"></i></div>
                    <div className='logo'><i class="uil uil-diary-alt"></i><p>Notes</p></div>
                </div>
                <div className=" profile-cointainer">
                    <div  className="hover">
                        <div><i class="uil uil-bright"></i></div>
                        {/* <div><i class="uil uil-brightness-half"></i></div> */}

                    </div>
                    <div className="hover">
                        <div className='profile-image'></div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;