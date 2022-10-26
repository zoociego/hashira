import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css"
import './Information.css';

const Information = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return(
        <>
        <div className='infoContainer'>
            <div className='infobgContainer'>
                <div className='tittleContainer'>
                    <h1 data-aos="fade-up">Welcome to Hashira Ragnarok Online</h1>
                </div>

                    <div className='welcomer'>
                        <div data-aos="zoom-out-right" className='welcomerText'> 
                            Hashira is a free MMORPG that seeks to bring you the best and most fun renewal experience possible. With us you can enjoy a multitude of official Instances. We work hard on our updates and pride ourselves on being able to offer something for everyone.
                        </div>

                        <div data-aos="fade-right" >
                            <img className='welcomerImage' src="https://cdn.discordapp.com/attachments/951299833598201916/1030008271412666448/archer-white.png"/>
                        </div> 
                    </div>

                    <div className='elemental'>
                        <div data-aos="fade-left">
                            <img className='elementalImage' src="https://cdn.discordapp.com/attachments/951299833598201916/1030014468668801164/magician-white.png"/>
                        </div>

                        <div className='elementalText'>
                            <div data-aos="zoom-out-left">
                            Elemental Server
                            Quest +300 
                            Costumes +200
                            Items Vip +100
                            </div>
                        </div>
                    </div>

                    <div className='level'>
                        <div className='levelText'>
                            <div data-aos="zoom-out-right">
                            Max Base Lvl: 255
                            Max Job Lvl: 130 
                            </div>
                        </div>
                        <div data-aos="fade-right">
                            <img className='levelImage' src="https://cdn.discordapp.com/attachments/951299833598201916/1030019382392410173/priest-white.png"/>
                        </div>
                    </div>

                    <div className='rate'>
                        <div data-aos="fade-left">
                            <img className='rateImage' src="https://cdn.discordapp.com/attachments/951299833598201916/1030026194034368512/assassin-white.png"/>
                        </div>

                        <div className='rateText'>
                            <div data-aos="zoom-out-left">
                            Rates: 130/130/100
                            Drop mvp 0.01 
                            Drop Mini Boss 0.01
                            Drop Card Normal : 2%
                            </div>
                        </div>
                    </div>

                    <div className='welcome'>
                        <div data-aos="fade-up">
                            <p href="/" className='welcomeImage'></p>
                        </div>
                    </div>
                
            </div>    
        </div>
        </>
        
    );
};

export default Information