import { useEffect, useState } from "react";

const Navbar = () => {

    const [sidenavOpen, setSidenavOpen] = useState(true)
    const [isDark, setDark] = useState(false)
   
  
   window.addEventListener("resize",()=>{
    
    window.outerWidth <= 600 ? setSidenavOpen(false) : setSidenavOpen(true)
   })

    window.addEventListener("scroll",function(){
        let a = document.querySelector('.navigation-outerdiv');
        let r = document.querySelector('.side-nav');
        a.style.setProperty('display', 'sticky')
    })
    useEffect(() => {
        const getCurrentTime = () => {
            const obj = new Date()
            let curhrs = obj.getHours()


            if (curhrs >= 18) {
                setDark(true)

            }
            else {
                setDark(false)

            }
        }
        getCurrentTime();
    }, [])
    useEffect(
        () => {
            const windowWidth=window.innerWidth
            
            let r = document.querySelector('.side-nav');
            let a = document.querySelector('#sidenav-text1');
            let b = document.querySelector('#sidenav-text2');
            let e = document.querySelector(".hero-cointainer");
            let f = document.querySelector(".feature-cointainer");
            let dark = document.querySelector(':root');
            if(isDark){
                dark.style.setProperty('--font-color', 'white')
                dark.style.setProperty('--background-color', '#272822')
                dark.style.setProperty('--shadow', 'rgba(0,0, 0, 0.8)')
                dark.style.setProperty('--border-color', '#656565')
                dark.style.setProperty('--set-remainder', '#4B4D41')
                
            }
            else{
                dark.style.setProperty('--font-color', 'black')
                dark.style.setProperty('--background-color', '#f6f6f6')
                dark.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.2)')
                dark.style.setProperty('--border-color', '#e0e0e0')
                dark.style.setProperty('--set-remainder', '#BFBFBF')
            }
            if (sidenavOpen) {
                r.style.setProperty('width', '27rem')
                a.style.setProperty('display','flex')
                b.style.setProperty('display','flex')
                e.style.setProperty('left', '30rem')
                dark.style.setProperty('--margin-left', '27rem')
                
            }
            else {
                r.style.setProperty('width', '8rem')
                a.style.setProperty('display', 'none')
                b.style.setProperty('display', 'none')
                e.style.setProperty('left', '10rem')
                dark.style.setProperty('--margin-left', '10rem')
            }
        }
        )
        
        


    return (
        <div>
            <nav className="navigation-outerdiv">
                <div className="logo-cointainer">
                    <div><i className=" hover uil uil-bars" onClick={() => setSidenavOpen(!sidenavOpen)}></i></div>
                    <div className='logo'><i class="fa-solid fa-notebook"></i> <p>Notes</p></div>
                </div>
                <div className=" profile-cointainer">
                    <div className="hover">
                        <div onClick={() => setDark(!isDark)}>
                           
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