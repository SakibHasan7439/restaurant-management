"use client"
import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <div className='bg-[#880808] pt-12 lg:h-[855px] relative px-2'>
            {/* Hero top */}
            <div className='flex items-center justify-between pb-13 z-10 relative max-w-[1400px] mx-auto'> 
                <h2 className='text-[32px] hiddenTitle uppercase text-white font-bold'>Restaurant</h2>
                <div className='relative smallDiv'>
                    <input type="text" className='input-field' placeholder='Search...' />
                    <div className='absolute top-3 left-3'>
                        <Image
                            width={30}
                            height={30} 
                            src={"/search.png"}
                            alt='search icon'
                        />
                    </div>
                </div>
            </div>
            {/* circle */}
            <div>
                <div className='absolute top-0 z-0'>
                    <Image 
                        width={600}
                        height={600}
                        src={"/ellipse.png"}
                        alt='circle icon'
                    />
                </div>
                <div className='absolute bottom-0 lg:top-[500px] right-0 z-0'>
                    <Image 
                        width={400}
                        height={400}
                        src={"/ellise2.png"}
                        alt='circle icon'
                    />
                </div>
                <div className="relative z-10 flex flex-col lg:flex-row justify-between pt-4 max-w-[1400px] mx-auto">
                    <div className='max-w-[900px] p-[40px]'>
                        <h1 className='text-[45px] lg:text-[96px] font-extralight uppercase text-white'>breakfast</h1>
                        <p className='text-white text-xl'>
                            Breakfast, often referred to as the ‘most important meal of the day’, provides essential nutrients to kick start our day. <span className='hidden md:block'>It includes a variety of foods, like fruits, cereals, dairy products, and proteins, that contribute to a balanced diet. </span>
                        </p>
                        <Image 
                        width={260}
                        height={200}
                        src={"/bigplate.png"}
                        alt='big food image'
                        className='pt-3 block lg:hidden'
                    />
                        <div className="flex items-center gap-4">
                            <Image 
                                width={140}
                                height={150}
                                src={"/food3.png"}
                                alt='food image'
                                className='pt-5 w-17 lg:w-[140px]'
                            />
                            <Image 
                                width={130}
                                height={150}
                                src={"/food4.png"}
                                alt='food image'
                                className='pt-12 w-17 lg:w-[140px]'
                            />
                            <Image 
                                width={140}
                                height={150}
                                src={"/food1.png"}
                                alt='food image'
                                className='w-17 lg:w-[140px]'
                            />
                            <Image 
                                width={140}
                                height={150}
                                src={"/food2.png"}
                                alt='food image'
                                className='w-17 lg:w-[140px]'
                            />
                        </div>
                    </div>
                    <Image 
                        width={260}
                        height={200}
                        src={"/bigplate.png"}
                        alt='big food image'
                        className='pt-35 lg:w-[460px] w-[260px] hidden lg:block'
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;