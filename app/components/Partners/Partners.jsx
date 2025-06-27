import Marquee from "react-fast-marquee";
import PartnersTitle from "./Partners-Title/PartnersTitle";
import Image from "next/image";

const Partners = () => {
    return (
        <div className="max-w-6xl mx-auto mb-[120px]">
            <PartnersTitle />
            {/* marquee */}
            <div>
                <Marquee>
                    <Image 
                        width={239}
                        height={128}
                        src={"/image1.png"}   
                        alt="partner image" 
                        className="mx-8"
                    />
                    <Image 
                        width={164}
                        height={128}
                        src={"/image2.png"}   
                        alt="partner image" 
                        className="mx-8"
                    />
                    <Image 
                        width={145}
                        height={128}
                        src={"/image3.png"}   
                        alt="partner image" 
                        className="mx-8"
                    />
                    <Image 
                        width={128}
                        height={128}
                        src={"/image4.png"}   
                        alt="partner image" 
                        className="mx-8"
                    />
                    <Image 
                        width={168}
                        height={128}
                        src={"/image5.png"}   
                        alt="partner image" 
                        className="mx-8"
                    />
                    <Image 
                        width={123}
                        height={128}
                        src={"/image6.png"}   
                        alt="partner image" 
                        className="mx-8"
                    />
                </Marquee>
            </div>
        </div>
    );
};

export default Partners;