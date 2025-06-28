"use client"
import MembersCard from "./Members-card/MembersCard";

const TeamMembers = () => {
    return (
        <div className="relative h-[800px]">
            <div className="flex pt-[50px] lg:pt-[120px] w-full bg-[url(/Bg.png)] bg-cover bg-center h-[460px] justify-center">
            <div className="max-w-6xl mx-auto">
                <div className="w-[280px] lg:w-[482px] mx-auto pb-[30px] md:pb-[56px]">
                    <h2 className="text-[30px] md:text-[48px] font-bold text-white text-center">Team Members</h2>
                    <p className="text-center text-[16px] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Varius sed pharetra dictum neque massa congue</p>
                </div>
                {/* members card component */}
                <div className="flex items-center justify-center gap-4">
                    <MembersCard 
                        name={"Mark Henry"}
                        position={"Owner"}
                    />
                    <div className="hidden lg:flex items-center gap-4">
                    <MembersCard 
                        name={"Lucky Helen"}
                        position={"Chef"}
                    />
                    <MembersCard 
                        name={"Moon Henry"}
                        position={"Founder"}
                    />
                    <MembersCard 
                        name={"Top Monrow"}
                        position={"Specialist"}
                    />
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default TeamMembers;