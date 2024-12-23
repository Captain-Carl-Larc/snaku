import React,{useState} from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="flex items-center justify-between bg-gray-800" >
            <div className="p-4 text-2xl font-bold text-white">
                LOGO
            </div>
            <header className ="bg-gray-800">      
            <div className="p-4 md:hidden" onClick={()=>setIsOpen(prevIsOpen=>!prevIsOpen)}>
                {isOpen ? <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 text-white font-bold">
                 <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
                :<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 text-white font-bold" >
                <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                </svg>}
            </div>
            <div>
                <ul className={`md:flex ${isOpen ? 'block' : 'hidden'} w-24 gap-y-2 pt-2 pb-2 indent-2 flex flex-col md:flex-row md:w-auto md:pr-4 md:gap-x-4 md:gap-y-0 text-white md:text-lg md:font-semibold`}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/executive">Executive</Link>
                    </li>
                </ul>
            </div>
        </header>
        </nav>

    )
}