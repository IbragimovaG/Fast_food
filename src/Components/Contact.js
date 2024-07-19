import React, {useEffect} from 'react';
import AOS from'aos';

function Contact(props) {
    useEffect(()=>{
        AOS.init({})
    },[]);
    return (
        <div id={'contact'} className={'w-screen h-screen bg-red-50 flex'}>
            <div data-aos={'fade-left'} className={'w-1/2 p-20 '}>
                <img width={'300'} className={'ml-40'} src={require('../assets/Снимок экрана 2024-06-20 173507.png')} alt=""/>
            </div>
            <div data-aos={'fade-right'} className={'w-1/2 py-52'}>
                <h5 className={'text-red-500  text-xl font-bold'}>Download Our App</h5>
                <h1 className={'text-4xl font-bold my-5'}>Get The Groceries App. <br/>
                Order More Easily</h1>
                <p className={'w-3/5 text-xl text-gray-500'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore magnam</p>
                <div className={'flex gap-3 mt-8'}>
                    <img className={'rounded-lg'} src={require('../assets/Снимок экрана 2024-06-20 174627.png')} alt=""/>
                    <img className={'rounded-lg'} src={require('../assets/Снимок экрана 2024-06-20 174700.png')} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Contact;