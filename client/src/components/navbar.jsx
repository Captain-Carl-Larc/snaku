import React,{useState} from "react"
import { NavLink } from "react-router-dom"


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const snakuLogoUrl="https://res.cloudinary.com/db439dn7s/image/upload/v1735020173/snaku-logo_tuox61.png"
    return (
        <nav className="flex items-center justify-between p-2 bg-gray-800" >
            <NavLink to="/"  className="relative p-4">
                <img src={snakuLogoUrl} alt="Snaku Logo" className="absolute top-0 left-0 z-10 w-8 " />
            </NavLink  >
            <header className ="bg-gray-800">      
            <div className="p-4 md:hidden" onClick={()=>setIsOpen(prevIsOpen=>!prevIsOpen)}>
                {isOpen ? <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="font-bold text-white size-8">
                 <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
                :<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="font-bold text-white size-8" >
                <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                </svg>}
            </div>
            <div>
                <ul className={`md:flex ${isOpen ? 'block' : 'hidden'} w-24 gap-y-2 pt-2 pb-2 indent-2 flex flex-col md:flex-row md:w-auto md:pr-4 md:gap-x-4 md:gap-y-0 text-white md:text-lg md:font-semibold`}>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? "text-blue-400" : null)}
                             to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? "text-blue-400" : null)} to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? "text-blue-400" : null)}  to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? "text-blue-400" : null)}  to="/posts">Posts</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? "text-blue-400" : null)}  to="/events">Events</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? "text-blue-400" : null)} to="/executive">Executive</NavLink>
                    </li>
                </ul>
            </div>
        </header>
        </nav>

    )
}