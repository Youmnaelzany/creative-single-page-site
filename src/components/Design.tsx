import { useState, useEffect } from 'react';
import StrategicMobile from "../assets/mobile/image-strategic.jpg";
import StrategicTablet from "../assets/tablet/image-strategic.jpg";
import StrategicDesktop from "../assets/desktop/image-strategic.jpg";

const Design = () => {
    const [imageSrc, setImageSrc] = useState(StrategicMobile);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setImageSrc(StrategicDesktop);
            } else if (window.innerWidth >= 640) {
                setImageSrc(StrategicTablet);
            } else {
                setImageSrc(StrategicMobile);
            }
        };

        handleResize(); // Initial check

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="flex flex-col-reverse sm:flex-row-reverse" aria-labelledby="hero-title">
            <div className="bg-[#191921] px-6 py-[4.5rem] sm:py-[7.5rem] sm:pr-10 sm:pl-[4.31rem] lg:py-[12.5rem] lg:pl-[9.63rem] lg:pr-[6.63rem] space-y-10 sm:space-8 lg:space-x-12">
                <div className="space-y-6 sm:space-y-8 lg:space-y-[2.69rem]">
                    <h1 id="hero-title" className="text-white text-[2rem] leading-10 font-extrabold sm:w-[17.5625rem] lg:w-[25.625rem] lg:text-[3.5rem] lg:leading-[4rem]">
                        <span className='text-[#F94F4F]'>Design</span> is strategic.
                    </h1>
                    <p className="text-white text-[0.9375rem] font-normal leading-[1.5625rem] w-[20.4375rem] sm:w-[17.5625rem] lg:w-[27.8125rem] lg:text-lg lg:leading-8">
                        We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.
                    </p>
                </div>
                <div className="">
                    <a href='/' className="text-[#F94F4F] underline text-[0.9375rem] leading-normal font-extrabold hover:text-[#FF9393] transition-colors duration-300 ease-in-out lg:text-lg">
                        Learn More
                    </a>
                </div>
            </div>
            <img src={imageSrc} alt="Hero image showcasing branding and website design" className="w-full h-auto bg-cover" loading="lazy" />
        </section>
    );
}

export default Design;