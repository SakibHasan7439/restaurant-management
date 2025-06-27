"use client"
import Image from 'next/image';
import React from 'react';

const ImageFooter = () => {
    return (
        <div className="grid grid-cols-3 gap-2">
              <Image 
                width={109}
                height={108}
                src={"/footer1.png"}
                alt='food image'
              />
              <Image 
                width={109}
                height={108}
                src={"/footer2.png"}
                alt='food image'
              />
              <Image 
                width={109}
                height={108}
                src={"/footer3.png"}
                alt='food image'
              />
              <Image 
                width={109}
                height={108}
                src={"/footer4.png"}
                alt='food image'
              />
              <Image 
                width={109}
                height={108}
                src={"/footer5.png"}
                alt='food image'
              />
              <Image 
                width={109}
                height={108}
                src={"/footer6.png"}
                alt='food image'
              />
        </div>
    );
};

export default ImageFooter;