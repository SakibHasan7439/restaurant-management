"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

const CustomerReview = () => {
    return (
        <div className='max-w-6xl w-full mx-auto'>
            <div className='flex flex-col lg:flex-row items-center justify-center'>
                <div className='w-[300px] lg:w-[664px]'>
                    <h2 className='text-[30px] lg:text-[50px] font-bold pb-[15px]'>Customer 
                        <span className='text-[#AD1519]'> Feedback</span>
                    </h2>
                    <Swiper
                        pagination={{
                        dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <p className='text-[20px] text-[#3D3D3D] pb-[68px]'>
                                Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.
                            </p>
                            <div className='flex items-center gap-6'>
                                <Image 
                                    width={74}
                                    height={74}
                                    src={'https://i.ibb.co/N2JTRDHL/Ellipse-2.png'}
                                    alt='customer image'
                                    className='rounded-full'
                                />
                                <div>
                                    <h3 className='text-xl font-bold text-[#AD1519]'>Tayyab Sohail</h3>
                                    <p className='text-xl'>UX/UI Designer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className='text-[20px] text-[#3D3D3D] pb-[68px]'>
                                Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.
                            </p>
                            <div className='flex items-center gap-6'>
                                <Image 
                                    width={74}
                                    height={74}
                                    src={'https://i.ibb.co/N2JTRDHL/Ellipse-2.png'}
                                    alt='customer image'
                                    className='rounded-full'
                                />
                                <div>
                                    <h3 className='text-xl font-bold text-[#AD1519]'>Tayyab Sohail</h3>
                                    <p className='text-xl'>UX/UI Designer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className='text-[20px] text-[#3D3D3D] pb-[68px]'>
                                Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.
                            </p>
                            <div className='flex items-center gap-6'>
                                <Image 
                                    width={74}
                                    height={74}
                                    src={'https://i.ibb.co/N2JTRDHL/Ellipse-2.png'}
                                    alt='customer image'
                                    className='rounded-full'
                                />
                                <div>
                                    <h3 className='text-xl font-bold text-[#AD1519]'>Tayyab Sohail</h3>
                                    <p className='text-xl'>UX/UI Designer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div>
                    <Image 
                        width={590}
                        height={590}
                        src={"/shafe.png"}
                        alt='Shafee image'
                    />
                </div>
            </div>
            
        </div>
    );
};

export default CustomerReview;