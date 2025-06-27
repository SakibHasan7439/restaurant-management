"use client"

import Image from "next/image";

const MembersCard = ({name, position}) => {
    return (
        <div className="shadow mb-[180px]">
            <Image 
                width={312}
                height={312}
                src={"/member.jpg"}
                alt="members image"
                className="mb-2 h-[312px] object-cover"
            />
            <h4 className="font-bold text-xl text-center">
                {name}
            </h4>
            <p className="text-center">{position}</p>
        </div>
    );
};

export default MembersCard;