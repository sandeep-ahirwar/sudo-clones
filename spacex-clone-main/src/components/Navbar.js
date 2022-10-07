import { useState, useEffect } from "react"

export default function Navbar(props) {
 

    const [show, setShow] = useState(true)

    const controlNavbar = ()=> {
        if(window.scrollY > 100){
            setShow(false)
        }
        else{
            setShow(true)
        }
    }

    useEffect(() => {
      window.addEventListener("scroll", controlNavbar)
    
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }, [])
    

    return(
        <div className={`flex justify-center fixed top-0 w-[100vw] ${!show && `hidden`}`}>
            <div className="logo my-2 cursor-pointer">
                <img id="navImg" className="w-40 h-8 lg:w-52 lg:h-10 lg:absolute lg:left-12 lg:top-7" src={ require("../assets/spacex-logo.png") } alt="sdgvs" />
            </div>

            <div className="hidden lg:block absolute top-7 my-4 left-72">
            <ul id="nav" className="flex flex-row text-xs font-bold text-white space-x-3 xl:space-x-7">
                <li className="cursor-pointer hover-underline-animation">FALCON 9</li>
                <li className="cursor-pointer hover-underline-animation">FALCON HEAVY</li>
                <li className="cursor-pointer hover-underline-animation">DRAGON</li>
                <li className="cursor-pointer hover-underline-animation">STARSHIP</li>
                <li className="cursor-pointer hover-underline-animation">HUMAN SPACEFLIGHT</li>
                <li className="cursor-pointer hover-underline-animation">RIDESHARE</li>
                <li className="cursor-pointer hover-underline-animation">STARLINK</li>
            </ul>
            </div>

            <div className="absolute right-4 my-4 lg:right-12 lg:top-7 flex text-white space-x-8 items-center">
                <p id="navShop" className="hidden lg:block text-xs font-bold cursor-pointer hover-underline-animation">SHOP</p>
                <div className="hamburger space-y-1 cursor-pointer" onClick={props.handleClick}>
                    <div id="hb1" className="line bg-white w-4 h-[2px] transition duration-500"></div>
                    <div id="hb2" className="line bg-white w-4 h-[2px] transition duration-500"></div>
                    <div id="hb3" className="line bg-white w-4 h-[2px]"></div>
                </div>
            </div>
        </div>
    )
}
