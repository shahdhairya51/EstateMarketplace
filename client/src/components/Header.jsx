import {FaSearch} from "react-icons/fa";
import {React} from "react";
import {Link} from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
        <div className=" flex justify-between items-center max-w-6xl mx-auto p-3">
            <Link to ='/'>
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                <span className="text-slate-500">Shah</span>
                <span className="text-slate-700">Estates</span>
            </h1>
            </Link>
            <form className="bg-slate-100 rounded-lg p-3 flex items-center w-24 sm:w-64 ">
                <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none" />
                <FaSearch className="text-slate-600"></FaSearch>
            </form>
            <ul className="flex gap-4">
               <Link to ="/home">
                 <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
               </Link>
               <Link to ="/about">
                <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
               </Link>
               <Link to ="/sign-in">
                <li className=" text-slate-700 hover:underline">SignIn</li>
               </Link>
            </ul>
        </div>
    </header>
  )
}
