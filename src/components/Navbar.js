import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion} from "framer-motion";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const navVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      delay: 0.5,
      duration: 1,
    },
  },
};

const nav_menu = [
  {
    name: "Home",
    link: "",
  },
  {
    name: "Websites",
    link: "websites",
  },
  {
    name: "FB Pages",
    link: "pages",
  },
  {
    name: "General Groups",
    link: "general groups",
  },
  {
    name: "LMS Groups",
    link: "skills groups",
  },
  {
    name: "Offline Groups",
    link: "wordpress offline groups",
  },
  {
    name: "Other Groups",
    link: "other groups",
  },
];

const Navbar = () => {

  const [Toggle, setToggle] = useState(false);

  const hangleToggle = () =>{
    setToggle(!Toggle);
  }

  return (
    <motion.section
      className="flex justify-between items-center py-2 px-10 sticky top-0 right-0 left-0 bg-white shadow-md z-10 w-full"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
    {/* //! main logo */}
        <div>
          <img src="logo.png" className="" alt="SoftTech-IT Logo" />
        </div>
        {/* //! MenuBar for PC */}
        <ul className="justify-between space-x-8 hidden xl:flex">
          {nav_menu.map((item) => (
            <li
              key={item.name}
              className="text-sm 2xl:text-base font-semibold transition-all hover:text-sky-500 cursor-pointer py-2 px-4 shadow-md bg-sky-500 text-white rounded-md hover:bg-white border-2 hover:border-2 border-sky-500"
            >
              <Link to={`#${item.link}`} smooth duration={500}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* //! Menubar button for mobile */}
        <div className="text-3xl block xl:hidden">
          <FaBars onClick={hangleToggle} />
        </div>
          {/* //! menubar for phone */}
        <ul className={`flex flex-col justify-start pt-[20%] items-center w-[100%] h-screen bg-white space-y-2 z-20 absolute top-0 right-0 left-0 transition-all duration-500 ${Toggle ? "-translate-y-[0]" : "-translate-y-[100%]" }`}>
          {nav_menu.map((item) => (
            <li
              key={item.name}
              onClick={hangleToggle}
              className="text-sm 2xl:text-base font-semibold transition-all hover:text-sky-500 cursor-pointer py-2 px-4 shadow-md bg-sky-500 text-white rounded-md hover:bg-white border-2 hover:border-2 border-sky-500 w-1/2"
            >
              <Link to={`#${item.link}`} smooth duration={500}>
                {item.name}
              </Link>
            </li>
          ))}
          {/* //! Close button for phone menubar */}
          <div className="absolute top-2 right-4 text-2xl">
            <GrClose onClick={hangleToggle} />
          </div>
        </ul>
    </motion.section>
  );
};

export default Navbar;
