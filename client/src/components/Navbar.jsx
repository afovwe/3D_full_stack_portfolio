import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md">
        <p className="text-[#f1a128] ">OA</p>
    </NavLink>
    <nav className="flex text-lg gap-7 font-medium">
    <NavLink to="/about" className={ ({ isActive})  => isActive  ? 'text-[#f1a128]' : 'text-black'}>
    About
    </NavLink>
     <NavLink to="/projects" className={ ({ isActive})  => isActive  ? 'text-[#f1a128]' : 'text-black'}>
    Projects
    </NavLink>
    </nav>
    </header>
  );
};

export default Navbar;
