import React, {useEffect} from 'react';
import AOS from'aos';

function Service(props) {
    useEffect(()=>{
        AOS.init({})
    },[]);
    return (
        <div id={'service'} className={'h-screen  w-screen text-center bg-red-50'}>
            <h5 className={'text-red-500 text-xl pt-28'}>What We Serve</h5>
            <h1 className={'font-bold text-4xl py-5'}>Your Favourite Food <br/>Delivery Partner</h1>
            <div data-aos={'fade-up'} className={'m-auto py-10  px-52 flex'}>
                <div
                      className={'text-center p-10 w-96 rounded-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-100 duration-300 mx-3 bg-white'}>
                    <img width={'150'} className={'m-auto'} src={require('../assets/img.png')} alt=""/>
                    <h4 className={'text-xl font-bold my-2'}>Easy To Order</h4>
                    <p className={'text-gray-500 '}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                </div>
                <div
                      className={'text-center w-96 p-10 rounded-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-100 duration-300 mx-3 bg-white'}>
                    <img width={'150'} className={'m-auto'} src={require('../assets/delivery1.webp')} alt=""/>
                    <h4 className={'text-xl font-bold my-2'}>Faster Delivery</h4>
                    <p className={'text-gray-500 '}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                </div>
                <div
                       className={'text-center w-96 p-10 rounded-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-100 duration-300 mx-3 bg-white'}>
                    <img width={'150'} className={'m-auto'} src={require('../assets/chef.jpg')} alt=""/>
                    <h4 className={'text-xl font-bold my-2'}>Best Quality</h4>
                    <p className={'text-gray-500 '}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
            </div>
        </div>
    );
}

export default Service;