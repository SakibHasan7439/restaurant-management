import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <div className='bg-[#880808] pt-12 h-[855px] relative'>
            {/* Hero top */}
            <div className='flex items-center pb-13 z-10 relative justify-between max-w-[1400px] mx-auto'> 
                <h2 className='text-[32px] uppercase text-white font-bold'>Restaurant</h2>
                <div className='relative'>
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
                <div className='absolute top-[500px] right-0 z-0'>
                    <Image 
                        width={400}
                        height={400}
                        src={"/ellise2.png"}
                        alt='circle icon'
                    />
                </div>
                <div className="relative z-10 flex justify-between pt-4 max-w-[1400px] mx-auto">
                    <div className='max-w-[900px]'>
                        <h1 className='text-[96px] font-extralight uppercase text-white'>breakfast</h1>
                        <p className='text-white text-xl'>
                            Breakfast, often referred to as the ‘most important meal of the day’, provides essential nutrients to kick start our day. It includes a variety of foods, like fruits, cereals, dairy products, and proteins, that contribute to a balanced diet. 
                        </p>
                        <div className="flex items-center gap-4">
                            <Image 
                                width={140}
                                height={150}
                                src={"/food3.png"}
                                alt='food image'
                            />
                            <Image 
                                width={130}
                                height={150}
                                src={"/food4.png"}
                                alt='food image'
                                className='pt-12'
                            />
                            <Image 
                                width={140}
                                height={150}
                                src={"/food1.png"}
                                alt='food image'
                            />
                            <Image 
                                width={140}
                                height={150}
                                src={"/food2.png"}
                                alt='food image'
                            />
                        </div>
                    </div>
                    <Image 
                        width={560}
                        height={200}
                        src={"/bigplate.png"}
                        alt='big food image'
                        className='pt-35'
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;