import { Typography, Box, Container, Link } from "@mui/material";
import React, {useState} from "react";

import { AiOutlineMenu, AiOutlineHome, AiOutlineProject} from "react-icons/ai";
import {GrProjects} from "react-icons/gr"
import {BsPerson} from "react-icons/bs"
function Sidenave(){

    const [nav, setNave] = useState(false);

    const toggleNav = () =>{
        setNave(!nav);
    }

    return(
        <>
         <AiOutlineMenu onClick={toggleNav} className="absolute text-black-500 right-4 top-4 z-[9] m-2 md:hidden md:text-primary"/>
         {
            nav?(
                <Container className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    <Link to="main" mt={4} underline="none" className="w-[75%] bg-gray-100 flex justify-center  items-center rounded-full shadow-lg gap-2 shadow-gray-400 cursor-pointer p-3 mt-5 hover:scale-110 ease-in duration-75">
                        <AiOutlineHome size={20} className="text-black"/>
                        <Typography variant="h7" className="text-black">Home</Typography>
                    </Link>
                    <Link to="main" mt={4} underline="none" className="w-[75%]  bg-gray-100  flex justify-center  items-center rounded-full shadow-lg gap-2 shadow-gray-400 cursor-pointer p-3 mt-5 hover:scale-110 ease-in duration-75">
                        <GrProjects size={20} className="text-black"/>
                        <Typography variant="h7" className="text-black">Works</Typography>
                    </Link>
                    <Link to="main" mt={4} underline="none" className="w-[75%] bg-gray-100  flex justify-center  items-center rounded-full shadow-lg gap-2 shadow-gray-400 cursor-pointer p-3 mt-5 hover:scale-110 ease-in duration-75">
                        <AiOutlineProject size={20} className="text-black"/>
                        <Typography variant="h7" className="text-black">Projects</Typography>
                    </Link>
                    <Link to="main" mt={4} underline="none" className="w-[75%] flex bg-gray-100  justify-center  items-center rounded-full shadow-lg gap-2 shadow-gray-400 cursor-pointer p-3 mt-5 hover:scale-110 ease-in duration-75">
                        <BsPerson size={20} className="text-black"/>
                        <Typography variant="h7" className="text-black">Resume</Typography>
                    </Link>
                </Container>
            ):(
                <>
                </>
            )
         }
        </>
    );
}

export default Sidenave;