import React, {useEffect} from 'react';
import { ArrowRightOutlined, SearchOutlined, ShoppingFilled} from "@ant-design/icons";
import {Link} from "react-router-dom";
import AOS from'aos';
function Navbar(props) {
    useEffect(()=>{
        AOS.init({})
    },[])
    return (
        <div data-aos={'fade-down'} className={'h-20 w-screen flex justify-evenly items-center bg-white fixed z-20 '}>
            <h1 className={'font-bold text-4xl'}>F<span className={'font-bold text-4xl text-red-600'}>OO</span>D</h1>
            <ul className={'flex w-5/12 justify-center'}>
                <li><a className={'mx-5 hover:text-red-600'} href={"#home"}> Home </a></li>
                <li><a className={'mx-5 hover:text-red-600'} href={"#product"}> Menu </a></li>
                <li><a className={'mx-5 hover:text-red-600'} href={"#service"}> Service </a></li>
                <li><a className={'mx-5 hover:text-red-600'} href={"#contact"}> Contact </a></li>
            </ul>
            <div>
                <SearchOutlined className={'text-gray-500'}/>
                <ShoppingFilled className={'text-gray-500 ml-2 mr-10'}/>
                <Link to={'/login'}>
                    <button className={'bg-red-600 rounded-3xl py-3 px-7 text-white'}>Sign in<ArrowRightOutlined
                        className={'ml-2'}/></button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;