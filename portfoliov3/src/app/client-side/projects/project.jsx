'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { projectsArray } from './projects'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Project = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true, // Enable auto sliding
        autoplaySpeed: 1500, // Delay between slides in milliseconds
        slidesToShow: 3, // Show 3 slides on larger screens
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200, // Adjust the breakpoint as needed
                settings: {
                    slidesToShow: 2, // Show 2 slides on medium-sized screens
                },
            },
            {
                breakpoint: 850, // Adjust the breakpoint as needed
                settings: {
                    slidesToShow: 1, // Show 1 slide on smaller screens
                },
            },
        ],
    };




    return (
        <React.Fragment >
            <div className="container">
                <div className="projectInner">

                    <div className="heading">
                        <h1> <span> &lt;</span>h1<span>&gt;</span> PROJECTS <span> &lt;</span>/h1<span>&gt;</span> </h1>
                    </div>
                    <div className="works">

                        <div className="wrapper">
                            <Slider className='reactSlickCarousel' {...settings}>

                                {
                                    projectsArray.map((item, keyId) => (


                                        <div key={keyId} className='item'>
                                            <a className="worksInner" draggable="false" target="_blank" href='https://find-my-doctor-v2.vercel.app/'>
                                                <Image src={item.image} alt="" />
                                                <div className="blackwindow">
                                                    <h2>{item.title}</h2>
                                                    <p>{item.description}</p>
                                                    <p>{item.description2}</p>
                                                </div>
                                            </a>
                                        </div>

                                    ))
                                }
                            </Slider>
                        </div>

                    </div>

                </div>

            </div>


        </React.Fragment>
    )
}