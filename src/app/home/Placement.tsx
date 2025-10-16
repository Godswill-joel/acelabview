"use client";


import { featuresData } from "../data/data";
import bgImage from "../../../public/assets/images/computer-program-coding-screen.jpg";



export default function CareerPlacementSection() {
    return (
        <section
            className="relative w-full h-screen bg-fixed bg-center bg-cover"
            style={{ backgroundImage: `url(${bgImage.src})` }}
        >
        
            <div className="absolute top-0 left-0 w-full z-1 overflow-hidden leading-none">
                <svg
                    className="relative block w-full h-48 rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 470"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="white"
                        fillOpacity="0.9"
                        d="M0,160L60,181.3C120,203,240,245,360,250.7C480,256,600,224,720,197.3C840,171,960,149,1080,138.7C1200,128,1320,128,1380,128L1440,128L1440,470L1380,470C1320,470,1200,470,1080,470C960,470,840,470,720,470C600,470,480,470,360,470C240,470,120,470,60,470L0,470Z"
                    ></path>
                </svg>
            </div>

            <div className="relative z-10 py-3 px-6 md:px-16 lg:px-20">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                    {featuresData.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={i}
                                className="bg-white rounded-2xl shadow-lg p-8 flex items-start gap-6 hover:shadow-2xl transition-all duration-300 relative z-20"
                            >
                                <div
                                    className={`${item.color} w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0`}
                                >
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}