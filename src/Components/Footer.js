import React,{useEffect} from 'react';
import { ArrowRightOutlined} from "@ant-design/icons";
import AOS from'aos';

function Footer(props) {
    useEffect(()=>{
    AOS.init({})
},[]);

    return (
        <div data-aos={'zoom-out'} className={'w-screen px-32'}>
            <div className={' h-96 flex pt-20  gap-5 '}>
                <div className={'w-4/12 '}>
                    <h5 className={'font-bold text-4xl'}>F<span className={'font-bold text-4xl text-red-600'}>OO</span>D
                    </h5>
                    <p className={'mt-8'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore magnam sequi
                        aliquam veritatis omnis esse
                        repudiandae beatae voluptatibus</p>
                </div>
                <div className={'w-4/12 ml-8'}>
                    <h1 className={'text-xl font-bold'}>Company</h1>
                    <ul>
                        <li className={'my-3 text-gray-500'}><a href={'#service'}>About Us</a></li>
                        <li className={'my-3 text-gray-500'}><a href={'#blog'}>Blog</a></li>
                        <li className={'my-3 text-gray-500'}><a href={'#product'}>All Products</a></li>
                        <li className={'my-3 text-gray-500'}><a href={'#contact'}>Location Map</a></li>
                    </ul>
                </div>
                <div className={'w-4/12 '}>
                    <h1 className={'text-xl font-bold'}>Services</h1>
                    <ul>
                        <li className={'my-3 text-gray-500'}><a href={'#product'}>Order Tracking</a></li>
                        <li className={'my-3 text-gray-500'}><a href={'#blog'}>Wish List</a></li>
                        <li className={'my-3 text-gray-500'}><a href={'#contact'}>My Account</a></li>
                        <li className={'my-3 text-gray-500'}><a href={'#service'}>Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className={'w-4/12 '}>
                    <h1 className={'text-xl font-bold'}>Get in Touch</h1>
                    <p className={'text-xl text-gray-500 mt-2'}>Subscribe to our weekly Newsletter and receive updates
                        via email.</p>
                    <input type="text" placeholder={"Enter Your Email Address"}
                           className={'text-gray-500 outline outline-2 outline-red-200 py-2 px-5 rounded-3xl mt-5'}/><ArrowRightOutlined
                    className={'py-2.5 px-2.5 bg-red-600 text-white rounded-full ml-2'}/>
                </div>
            </div>
            <hr className={'h-0.5 bg-gray-300  m-auto -mt-10'}/>
            <div className={'mt-5 justify-between items-center text-gray-500 flex  pb-20'}>
                <h5>All Rights Reserved Company 2022</h5>
                <div className={'lg:flex gap-5'}>
                    <h5>Terms & Conditions</h5>
                    <h5>Privacy Policy</h5>
                </div>
            </div>
        </div>
    );
}

export default Footer;