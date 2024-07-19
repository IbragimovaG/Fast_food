import React, {useState} from 'react';
import {ShoppingCartOutlined} from "@ant-design/icons";

function Noodles(props) {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    const [counter4, setCounter4] = useState(0);
    const [counter5, setCounter5] = useState(0);
    const [counter6, setCounter6] = useState(0);
    const [counter7, setCounter7] = useState(0);
    const [counter8, setCounter8] = useState(0);
    return (
        <div className={'pt-10 flex flex-wrap gap-5 pl-52 '}>
            <div className={'w-1/5 h-72 rounded-xl bg-white hover:bg-red-600 hover:text-white shadow-2xl p-5'}>
                <img className={'m-auto rounded-full'} width={"150"} src={require("../assets/noodle.jpg")} alt=""/>
                <h1 className={'font-bold '}>Ramen Noodle</h1>
                <p className={'text-xs my-3'}>Big Portion</p>
                <h2 className={'font-bold text-xl mt-5'}>$12.50</h2>
                <div className={'mt-4 flex items-center justify-center'}>
                    <button onClick={() => {
                        setCounter1(counter1 - 1)
                    }} className={"text-xl border border-white rounded-l-lg   py-1 px-3"}>-
                    </button>
                    <button className={'text-xl border border-white py-1 px-3'}>{counter1}</button>
                    <button onClick={() => {
                        setCounter1(counter1 + 1)
                    }} className={"text-xl border border-white rounded-r-lg py-1 px-3"}>+
                    </button>
                    <button className={'px-3 py-1.5 ml-5 border border-white rounded-lg'}><ShoppingCartOutlined/>
                    </button>
                </div>
            </div>
            <div className={'w-1/5 h-72 rounded-xl bg-white hover:bg-red-600 hover:text-white shadow-2xl p-5'}>
                <img className={'m-auto rounded-full'} width={"150"} src={require("../assets/noodle.jpg")} alt=""/>
                <h1 className={'font-bold '}>Ramen Noodle</h1>
                <p className={'text-xs my-3'}>Big Portion </p>
                <h2 className={'font-bold text-xl mt-5'}>$12.50</h2>
                <div className={'mt-4 flex items-center justify-center'}>
                    <button onClick={() => {
                        setCounter2(counter2 - 1)
                    }} className={"text-xl border border-white rounded-l-lg   py-1 px-3"}>-
                    </button>
                    <button className={'text-xl border border-white py-1 px-3'}>{counter2}</button>
                    <button onClick={() => {
                        setCounter2(counter2 + 1)
                    }} className={"text-xl border border-white rounded-r-lg py-1 px-3"}>+
                    </button>
                    <button className={'px-3 py-1.5 ml-5 border border-white rounded-lg'}><ShoppingCartOutlined/>
                    </button>
                </div>
            </div>
            <div className={'w-1/5 h-72 rounded-xl bg-white hover:bg-red-600 hover:text-white shadow-2xl p-5'}>
                <img className={'m-auto rounded-full'} width={"150"} src={require("../assets/noodle.jpg")} alt=""/>
                <h1 className={'font-bold '}>Ramen Noodle</h1>
                <p className={'text-xs my-3'}>Big Portion</p>
                <h2 className={'font-bold text-xl mt-5'}>$12.30</h2>
                <div className={'mt-4 flex items-center justify-center'}>
                    <button onClick={() => {
                        setCounter3(counter3 - 1)
                    }} className={"text-xl border border-white rounded-l-lg   py-1 px-3"}>-
                    </button>
                    <button className={'text-xl border border-white py-1 px-3'}>{counter3}</button>
                    <button onClick={() => {
                        setCounter3(counter3 + 1)
                    }} className={"text-xl border border-white rounded-r-lg py-1 px-3"}>+
                    </button>
                    <button className={'px-3 py-1.5 ml-5 border border-white rounded-lg'}><ShoppingCartOutlined/>
                    </button>
                </div>
            </div>
            <div className={'w-1/5 h-72 rounded-xl bg-white hover:bg-red-600 hover:text-white shadow-2xl p-5'}>
                <img className={'m-auto rounded-full'} width={"150"} src={require("../assets/noodle.jpg")} alt=""/>
                <h1 className={'font-bold '}>Ramen Noodle</h1>
                <p className={'text-xs my-3'}>Big Portion</p>
                <h2 className={'font-bold text-xl mt-5'}>$12.50</h2>
                <div className={'mt-4 flex items-center justify-center'}>
                    <button onClick={() => {
                        setCounter4(counter4 - 1)
                    }} className={"text-xl border border-white rounded-l-lg   py-1 px-3"}>-
                    </button>
                    <button className={'text-xl border border-white py-1 px-3'}>{counter4}</button>
                    <button onClick={() => {
                        setCounter4(counter4 + 1)
                    }} className={"text-xl border border-white rounded-r-lg py-1 px-3"}>+
                    </button>
                    <button className={'px-3 py-1.5 ml-5 border border-white rounded-lg'}><ShoppingCartOutlined/>
                    </button>
                </div>
            </div>
            <div className={'w-1/5 h-72 rounded-xl bg-white hover:bg-red-600 hover:text-white shadow-2xl p-5'}>
                <img className={'m-auto rounded-full'} width={"150"} src={require("../assets/noodle.jpg")} alt=""/>
                <h1 className={'font-bold '}>Ramen Noodle</h1>
                <p className={'text-xs my-3'}>Big Portion</p>
                <h2 className={'font-bold text-xl mt-5'}>$12.50</h2>
                <div className={'mt-4 flex items-center justify-center'}>
                    <button onClick={() => {
                        setCounter5(counter5 - 1)
                    }} className={"text-xl border border-white rounded-l-lg   py-1 px-3"}>-
                    </button>
                    <button className={'text-xl border border-white py-1 px-3'}>{counter5}</button>
                    <button onClick={() => {
                        setCounter5(counter5 + 1)
                    }} className={"text-xl border border-white rounded-r-lg py-1 px-3"}>+
                    </button>
                    <button className={'px-3 py-1.5 ml-5 border border-white rounded-lg'}><ShoppingCartOutlined/>
                    </button>
                </div>
            </div>
            <div className={'w-1/5 h-72 rounded-xl bg-white hover:bg-red-600 hover:text-white shadow-2xl p-5'}>
                <img className={'m-auto rounded-full'} width={"150"} src={require("../assets/noodle.jpg")} alt=""/>
                <h1 className={'font-bold '}>Ramen Noodle</h1>
                <p className={'text-xs my-3'}>Big Portion</p>
                <h2 className={'font-bold text-xl mt-5'}>$12.50</h2>
                <div className={'mt-4 flex items-center justify-center'}>
                    <button onClick={() => {
                        setCounter6(counter6 - 1)
                    }} className={"text-xl border border-white rounded-l-lg   py-1 px-3"}>-
                    </button>
                    <button className={'text-xl border border-white py-1 px-3'}>{counter6}</button>
                    <button onClick={() => {
                        setCounter6(counter6 + 1)
                    }} className={"text-xl border border-white rounded-r-lg py-1 px-3"}>+
                    </button>
                    <button className={'px-3 py-1.5 ml-5 border border-white rounded-lg'}><ShoppingCartOutlined/>
                    </button>
                </div>
            </div>
            <div className={'w-1/5 h-72 rounded-xl bg-white hover:bg-red-600 hover:text-white shadow-2xl p-5'}>
                <img className={'m-auto rounded-full'} width={"150"} src={require("../assets/noodle.jpg")} alt=""/>
                <h1 className={'font-bold '}>Ramen Noodle</h1>
                <p className={'text-xs my-3'}>Big Portion</p>
                <h2 className={'font-bold text-xl mt-5'}>$12.50</h2>
                <div className={'mt-4 flex items-center justify-center'}>
                    <button onClick={() => {
                        setCounter7(counter7 - 1)
                    }} className={"text-xl border border-white rounded-l-lg   py-1 px-3"}>-
                    </button>
                    <button className={'text-xl border border-white py-1 px-3'}>{counter7}</button>
                    <button onClick={() => {
                        setCounter7(counter7 + 1)
                    }} className={"text-xl border border-white rounded-r-lg py-1 px-3"}>+
                    </button>
                    <button className={'px-3 py-1.5 ml-5 border border-white rounded-lg'}><ShoppingCartOutlined/>
                    </button>
                </div>
            </div>
            <div className={'w-1/5 h-72 rounded-xl bg-white hover:bg-red-600 hover:text-white shadow-2xl p-5'}>
                <img className={'m-auto rounded-full'} width={"150"} src={require("../assets/noodle.jpg")} alt=""/>
                <h1 className={'font-bold '}>Ramen Noodle</h1>
                <p className={'text-xs my-3'}>Big Portion</p>
                <h2 className={'font-bold text-xl mt-5'}>$12.50</h2>
                <div className={'mt-4 flex items-center justify-center'}>
                    <button onClick={() => {
                        setCounter8(counter8 - 1)
                    }} className={"text-xl border border-white rounded-l-lg   py-1 px-3"}>-
                    </button>
                    <button className={'text-xl border border-white py-1 px-3'}>{counter8}</button>
                    <button onClick={() => {
                        setCounter8(counter8 + 1)
                    }} className={"text-xl border border-white rounded-r-lg py-1 px-3"}>+
                    </button>
                    <button className={'px-3 py-1.5 ml-5 border border-white rounded-lg'}><ShoppingCartOutlined/>
                    </button>
                </div>
            </div>
        </div>
)}
export default Noodles;