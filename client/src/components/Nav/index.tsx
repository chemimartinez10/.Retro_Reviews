import './styles.css'
import { VscThreeBars } from 'react-icons/vsc'
import { useState } from 'react'

function Nav() {
    const [clickedNav, setClickedNav] = useState(false)
    return (
        <nav>
            <div className="logo">
                <h1
                    id="logo"
                    className="glitch"
                    data-title-text=".Retro_Reviews_"
                >
                    .Retro_Reviews_
                </h1>
                <button id="navbutton" onClick={()=>{setClickedNav(!clickedNav)}}>
                    <VscThreeBars />
                </button>
            </div>
            <ul className={clickedNav ? "accesos" : "accesos hidden"}>
                <li>
                    <a href="" className="navlink" data-title-text="Jose Miguel">
                        Jose Miguel
                    </a>
                </li>
                <li>
                    <a href="" className="navlink" data-title-text="Anime">
                        Anime
                    </a>
                </li>
                <li>
                    <a href="" className="navlink" data-title-text="Videogames">
                        Videogames
                    </a>
                </li>
                <li>
                    <a href="" className="navlink" data-title-text="News">
                        News
                    </a>
                </li>
                <li>
                    <a href="" className="navlink" data-title-text="Home">
                        Home
                    </a>
                </li>
            </ul>
        </nav>)
}

export default Nav