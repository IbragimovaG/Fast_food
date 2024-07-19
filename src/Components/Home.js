import React, {useEffect} from 'react';
import {
    CaretRightFilled,
    ShoppingCartOutlined,
    StarFilled
} from "@ant-design/icons";
import AOS from'aos';
function Home(props) {
        useEffect(()=>{
            AOS.init({})
        },[]);
    return (
        <div id={'home'} className={'h-screen w-screen lg:flex px-20 pt-36'}>
            <div data-aos={'fade-up'} className={"w-1/2 pl-16"}>
                <div  className={'flex h-10 w-60 bg-red-100 rounded-3xl justify-around items-center text-red-500'}><h5
                    className={'text-xl'}>More than Faster </h5>
                    <img className={'h-8'} src={require('../assets/strawberry (1).png')} alt=""/></div>
                <h1  className={'font-bold text-6xl w-8/12 my-10'}>Be The Fastest In Delivering Your <span
                    className={'text-red-600 font-bold text-6xl'}>Food</span></h1>
                <p className={'text-gray-500 text-xl w-10/12 '}> Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Tempore magnam sequi aliquam veritatis
                    omnis esse repudianda.</p>
                <div className={'flex mt-10'}>
                    <button className={'bg-red-600 text-white rounded-3xl text-xl py-2 px-12'}>Order Now</button>
                    <button className={'outline outline-1 outline-red-600 text-gray-500 text-xl rounded-3xl py-2 px-8 ml-10'}><CaretRightFilled className={'text-red-600'}/>Order Process</button>
                </div>
            </div>
            <div data-aos={'fade-left'} className={'w-1/2 relative'}>
                <div>
                    <div className={'h-52 rounded-2xl w-40 text-center absolute top-5 left-0 z-10 shadow-lg'}>
                        <img width={'80'} className={'m-auto my-2'} src={require("../assets/orange.jpg")} alt=""/>
                        <p className={'font-bold text-gray-500 my-2'}>Fresh Orange</p>
                        <hr className={"bg-orange-500 w-6 m-auto min-h-1 my-2"}/>
                        <h1 className={'font-bold text-xl my-2'}>$44.60</h1>
                        <p className={'text-gray-500 text-xs my-2'}>Free Shopping</p>
                        <ShoppingCartOutlined
                            className={'bg-red-600 p-3 rounded-xl text-white my-2 absolute top-50 left-16'}/>
                    </div>
                    <div className={'h-16 rounded-2xl w-52 absolute top-0 right-5 z-10 shadow-lg flex'}>
                        <div className={'p-3 pl-5'}>
                            <img width={'40'} src={require("../assets/alarm-clock-24.png")} alt=""/>
                        </div>
                        <div className={'p-2 ml-3'}>
                            <h5>Delivery</h5>
                            <p className={'text-xs text-gray-500'}>30 Min</p>
                        </div>
                    </div>
                    <div className={'h-28 rounded-2xl w-96 absolute backdrop-blur-md bottom-14 right-3 z-10 shadow-lg flex'}>
                        <div className={'ml-3  w-1/2 p-3'}>
                            <h5 className={'text-xl text-white font-bold'}>American Burger</h5>
                            <StarFilled className={'text-yellow-400 mx-1'}/>
                            <StarFilled className={'text-yellow-400 mx-1'}/>
                            <StarFilled className={'text-yellow-400 mx-1'}/>
                            <StarFilled className={'text-yellow-400 mx-1'}/>
                            <StarFilled className={'text-yellow-400 mx-1'}/>
                            <h1 className={'font-bold text-xl my-2'}>$44.60</h1>
                        </div>
                        <div className={'p-3 pl-16 w-1/2'}>
                        <img width={'150'} className={'rounded-lg'} src={require("../assets/burger1.jpg")} alt=""/>
                        </div>

                    </div>
                    <img className={'absolute bottom-24 right-0 z-0'}  src={require("../assets/model-shows-pleasure-after-having-sushi-rolls-meal-holding-chopsticks.jpg")} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Home;