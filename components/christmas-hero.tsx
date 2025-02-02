"use client"
import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'
import Image from "next/image";
import HeroImage from "@/public/images/christmas-hero.png";
import {useModal} from "@ebay/nice-modal-react";
import UserInfoModal from "@/components/ui/WaitlistModal";
import {useCallback} from "react";
import NiceModal from '@ebay/nice-modal-react';


export default function ChristmasHero() {
    const userModal = useModal(UserInfoModal);

    const handleNewUser = useCallback(() => {
        console.log("handleNewUser")
        userModal.show().then((newUser) => {
            console.log("handleNewUser2")
        });
    }, [userModal]);

    return (
        <NiceModal.Provider>
            <section className="relative">

                {/* Illustration behind hero content */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
                     aria-hidden="true">
                    <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                                <stop stopColor="#FFF" offset="0%"/>
                                <stop stopColor="#EAEAEA" offset="77.402%"/>
                                <stop stopColor="#DFDFDF" offset="100%"/>
                            </linearGradient>
                        </defs>
                        <g fill="url(#illustration-01)" fillRule="evenodd">
                            <circle cx="1232" cy="128" r="128"/>
                            <circle cx="155" cy="443" r="64"/>
                        </g>
                    </svg>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 hero-image">

                    {/* Hero content */}
                    <div className="pt-32 pb-12">

                        <Image className="md:max-w-none transform hero-image" src={HeroImage} width={500} height="44"
                               alt="Element"/>

                        {/* Section header */}
                        <div className="text-center pb-12 md:pb-16 hero-image">
                            {/* Hero image */}

                            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                                data-aos="zoom-y-out">Create reimagined <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-green-400">Christmas</span> photos
                                with AI</h1>
                            <div className="max-w-3xl mx-auto">
                                <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out"
                                   data-aos-delay="150">Upload your photos and we'll generate a photos of you wearing your best ugly Christmas sweater - for free!</p>
                                <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                                     data-aos="zoom-y-out" data-aos-delay="300">
                                    <div>
                                        <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                                           onClick={handleNewUser}>Sign up</button>
                                    </div>
                                    {/*<div>*/}
                                    {/*    <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"*/}
                                    {/*       href="#0">Learn more</a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </section>
        </NiceModal.Provider>
    )
}