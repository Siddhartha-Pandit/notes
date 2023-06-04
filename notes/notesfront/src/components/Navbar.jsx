import { useEffect, useState } from "react";

const Navbar = () => {

    const [sidenavOpen, setSidenavOpen] = useState(true)
    const [isDark, setDark] = useState(false)
    const [windowSize, setSize] = useState()
  
    function widthchange(){
        setSize(window.outerWidth)
        console.log("window size is",windowSize)
    }
    
    useEffect(
        () => {
            const windowWidth=window.innerWidth
            console.log("width of",windowWidth)
            let r = document.querySelector('.side-nav');
            let a = document.querySelector('#sidenav-text1');
            let b = document.querySelector('#sidenav-text2');
            let e = document.querySelector('.hero-cointainer');
            if (sidenavOpen) {
                r.style.setProperty('width', '28rem')
                a.style.setProperty('display', 'flex')
                b.style.setProperty('display', 'flex')
                e.style.setProperty('left', '28rem')
                
            }
            else {
                r.style.setProperty('width', '8rem')
                a.style.setProperty('display', 'none')
                b.style.setProperty('display', 'none')
                e.style.setProperty('left', '8rem')
            }
        }
        )
        let dark = document.querySelector(':root');
        if(isDark){
                dark.style.setProperty('--font-color', 'white')
                dark.style.setProperty('--background-color', '#272822')
                // dark.style.setProperty('--background-color', '#af856b')
                dark.style.setProperty('--shadow', 'rgba(255, 255, 255, 0.1)')

            }
            else{
                dark.style.setProperty('--font-color', 'black')
                dark.style.setProperty('--background-color', '#f6f6f6')
                dark.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.1)')
            }


    return (
        <div>
            <nav className="navigation-outerdiv">
                <div className="logo-cointainer">
                    <div><i className=" hover uil uil-bars" onClick={() => setSidenavOpen(!sidenavOpen)}></i></div>
                    <div className='logo'><i className="uil uil-diary-alt"></i><p>Notes</p></div>
                </div>
                <div className=" profile-cointainer">
                    <div className="hover">
                        <div onClick={() => setDark(!isDark)} onresize={()=>widthchange}>
                           
                             {isDark ?  <i className="uil uil-bright"></i>:<i className="uil uil-brightness-half"></i>}
                   
                        </div>


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