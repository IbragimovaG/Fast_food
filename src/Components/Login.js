import React from 'react';
import {ArrowLeftOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

function Login(props) {
    return (
        <div className={'w-screen h-screen flex relative'}>
            <Link to={"/"}>
                <button
                    className={'backdrop-blur-sm bg-white/10 px-8 rounded-lg text-white py-2 flex items-center absolute z-10 top-5 left-5'}>
                    <ArrowLeftOutlined className={'text-white mr-4'}/> Back
                </button>
            </Link>
            <img className={'w-5/12 h-screen'} src={require('../assets/pexels-chevanon-1108117.jpg')} alt=""/>
            <div className={'w-1/2 pt-20 px-32'}>
                <h1 className={'font-bold text-5xl'}>Sign Up</h1>
                <div className={'flex'}>
                    <button className={"mt-10 py-3 outline outline-1 outline-red-200 flex px-3 rounded-lg hover:bg-gray-100"}><img
                        width={'30'} className={'rounded-full mr-3 '} src={require('../assets/google.png')} alt=""/>SignUp
                        With Google
                    </button>
                    <button className={"mt-10 ml-3 py-3 outline outline-1 outline-red-200 flex px-3 rounded-lg hover:bg-gray-100"}><img
                        width={'30'} className={'rounded-full mr-3'} src={require('../assets/facebook.png')} alt=""/>SignUp
                        With Facebook
                    </button>
                </div>
                <div className={'flex items-center mt-5'}>
                    <hr className={'w-40 h-0.5 bg-black mr-4'}/>
                    <h1 >Or with Email</h1>
                    <br/>
                    <hr className={'w-40 h-0.5 bg-black ml-4'}/>
                </div>
                <div className={'flex flex-col mt-5'}>
                    <label htmlFor="input" className={'text-gray-500 text-xl'}>Email Address</label>
                    <input id={'input'} className={'w-11/12 py-2 my-2 p-1 outline outline-2 outline-red-100 rounded ' +
                        'hover:bg-red-50 hover:outline-red-300 text-red-400 text-xl'} type="text" placeholder={"Enter Your Email"}/>
                    <label htmlFor="input2" className={'text-gray-500 text-xl'}>Password</label>
                    <input id={'input2'} className={'w-11/12 py-2 my-2 p-1 outline outline-2 outline-red-100 rounded ' +
                        'hover:bg-red-50 hover:outline-red-300 text-red-400 text-xl'} type="password" placeholder={"Enter Your Password"} />
                    <div className={'flex items-center mt-5'}>
                        <input checked={true} type="checkbox" className={'accent-red-600 mr-3'}/>
                    <p>I agree to the  <u>Terms of Use </u> and <u> Privacy and Policy</u></p>
                    </div>
                    <button className={'bg-red-600 py-2 w-11/12 rounded text-white mt-8'}>signup</button>
                    <h1 className={'text-xl text-gray-500 mt-5'}>Already Have An account? <span className={'text-gray-500 font-bold'}>Login</span></h1>
                </div>
            </div>
        </div>
    );
}

export default Login;