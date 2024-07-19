import React from 'react';
import {Carousel} from "antd";

function Blog(props) {

    return (
        <div id={"blog"} className={'h-screen w-screen text-center pt-10'}>
            <h1 className={'font-bold text-4xl '}>Testimonials About Us</h1>
            <hr className={'bg-red-600 h-3 w-12 rounded-3xl m-auto  my-5'}/>
            <p className={'text-xl text-gray-500 '}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore magnam sequi
               <br/> aliquam veritatis ,consectetur adipisicing elit.</p>
            <div>
                <Carousel autoplay className={'w-8/12 m-auto p-16 shadow-lg rounded-3xl text-start mt-28'}>
                    <div className={'flex w-full'}>
                        <img width={'150'} className={'rounded-full'} src={require('../assets/girl1.png')} alt=""/>
                        <p className={'text-xl  w-8/12 ml-52 -mt-36'}>Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Tempore magnam sequi Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Tempore magnam sequi Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit.
                        </p>
                        <h5 className={'text-xl font-bold text-red-500 mt-5 ml-52 '}>Melissa Carson</h5>
                        <p className={'text-xs text-gray-500 mt-3 ml-52'}>Alexandria, LA</p>
                    </div>
                    <div className={'flex w-full'}>
                        <img width={'150'} height={'100'}  className={'rounded-full'} src={require('../assets/carusel2.webp')} alt=""/>
                        <p className={'text-xl  w-8/12 ml-52 -mt-36'}>Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Tempore magnam sequi Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Tempore magnam sequi Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit.
                        </p>
                        <h5 className={'text-xl font-bold text-red-500 mt-5 ml-52 '}>Melissa Carson</h5>
                        <p className={'text-xs text-gray-500 mt-3 ml-52'}>Alexandria, LA</p>
                    </div>
                    <div className={'flex w-full'}>
                        <img width={'150'} className={'rounded-full'} src={require('../assets/carusel3.png')} alt=""/>
                        <p className={'text-xl  w-8/12 ml-52 -mt-36'}>Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Tempore magnam sequi Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Tempore magnam sequi Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit.
                        </p>
                        <h5 className={'text-xl font-bold text-red-500 mt-5 ml-52 '}>Melissa Carson</h5>
                        <p className={'text-xs text-gray-500 mt-3 ml-52'}>Alexandria, LA</p>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Blog;