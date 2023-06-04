import { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  useEffect(
    () => {
      const elems = document.querySelectorAll('.sidenav-li')
      console.log(elems)

      elems[0].addEventListener('click', () => {
        elems[0].classList.add('clicked')
        elems[1].classList.remove('clicked')
      })

      elems[1].addEventListener('click', () => {
        elems[1].classList.add('clicked')
        elems[0].classList.remove('clicked')
      })

    }
  )
  return (
    <div className="side-nav">
      <ul>
        <Link to='/' style={{ textDecoration: 'none' }}><li className="sidenav-li"><i className="uil nav-icon uil-file-graph"></i><div id="sidenav-text1"> Notes</div></li></Link>
        <Link to='/todo' style={{ textDecoration: 'none' }}> <li className="sidenav-li"><i className="uil nav-icon uil-list-ul"></i> <div id="sidenav-text2">To-do List</div></li></Link>
      </ul>
    </div>
  );
}

export default Sidenav;