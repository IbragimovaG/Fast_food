import React, {useEffect} from 'react';
import {BarsOutlined, PlusOutlined} from "@ant-design/icons";
import {Link, Outlet} from "react-router-dom";
import AOS from'aos';

function Product(props) {
    useEffect(()=>{
        AOS.init({})
    },[]);
    return (
 <div id={'product'} data-aos={'zoom-in'} className={'w-screen h-fit text-center'}>
     <h5  className={'text-xl text-red-600 pt-20 '}>Our Menu</h5>
     <h1 className={'text-3xl font-bold mb-10 mt-5'}>Menu That Always Make You <br/> To Fall In Love</h1>
     <div className={'flex justify-evenly px-40 sm:px-10 sm:flex-wrap sm:gap-4'}>
             <button
                 className={'py-4 shadow-lg   px-6 rounded-lg  border-0 text-black hover:text-white hover:bg-red-600'}>
                 <BarsOutlined/></button>
         <Link to={"/burger"}>
         <button className={'py-4 shadow-lg   px-6 rounded-lg  border-0 text-black hover:text-white hover:bg-red-600'}><PlusOutlined/>Burgers</button>
         </Link>

         <Link to={"/sandwich"}>
             <button
                 className={'py-4 shadow-lg   px-6 rounded-lg  border-0 text-black hover:text-white hover:bg-red-600'}><PlusOutlined/>Sandwiches
             </button>
         </Link>
         <Link to={"/pizza"}>
             <button
                 className={'py-4 shadow-lg   px-6 rounded-lg  border-0 text-black hover:text-white hover:bg-red-600'}><PlusOutlined/>Pizzas
             </button>
         </Link>
         <Link to={"/hotDog"}>
             <button
                 className={'py-4 shadow-lg   px-6 rounded-lg  border-0 text-black hover:text-white hover:bg-red-600'}><PlusOutlined/>Hot Dogs
             </button>
         </Link>
         <Link to={"/burrito"}>
             <button
                 className={'py-4 shadow-lg   px-6 rounded-lg  border-0 text-black hover:text-white hover:bg-red-600'}><PlusOutlined/>Burritos
             </button>
         </Link>
         <Link to={"/muffin"}>
         <button
             className={'py-4 shadow-lg   px-6 rounded-lg  border-0 text-black hover:text-white hover:bg-red-600'}><PlusOutlined/>Muffins
         </button>
     </Link>
         <Link to={"noodle"}>
             <button
                 className={'py-4 shadow-lg   px-6 rounded-lg  border-0 text-black hover:text-white hover:bg-red-600'}><PlusOutlined/>Noodles</button>
         </Link>
     </div>
     <div className={'my-5 w-screen'} >
         <Outlet/>
         <button className={'py-2 px-14 my-10 shadow-lg rounded-3xl text-red-600 m-auto bg-white'}>Show More</button>
     </div>

 </div>
    );
}

export default Product;