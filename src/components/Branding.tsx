import { useState, useEffect } from 'react';
import HeroMobile from "../assets/mobile/image-hero.jpg";
import HeroTablet from "../assets/tablet/image-hero.jpg";
import HeroDesktop from "../assets/desktop/image-hero.jpg";

const Branding = () => {
    const [imageSrc, setImageSrc] = useState(HeroMobile);

    useEffect(() => {
        const updateImageSrc = () => {
            if (window.innerWidth >= 1280) {
                setImageSrc(HeroDesktop);
            } else if (window.innerWidth >= 640) {
                setImageSrc(HeroTablet);
            } else {
                setImageSrc(HeroMobile);
            }
        };

        updateImageSrc(); // Set the initial image source
        window.addEventListener('resize', updateImageSrc);
        return () => window.removeEventListener('resize', updateImageSrc);
    }, []);

    return (
        <section className="relative flex flex-col-reverse mb-24 gap-y-20 sm:flex-row sm:mb-0" aria-labelledby="hero-title">
            <div className="mx-6 sm:mx-0 sm:ml-[2.44rem] lg:ml-[10.31rem] space-y-10 sm:space-y-8 lg:space-y-12 sm:mt-[4.81rem] lg:mt-28 z-40 sm:mb-[10.1rem] lg:mb-48">
                <div className="space-y-[0.94rem] sm:space-y-[1.19rem] lg:space-y-[2.44rem]">
                    <h1 id="hero-title" className="text-black text-[2.5rem] leading-10 font-extrabold lg:w-[44.625rem] w-[20.4375rem] sm:w-[23.875rem] sm:text-[3.5rem] sm:leading-[3.5rem] lg:text-[5rem] lg:leading-[5.5rem]">
                        Branding & website design agency
                    </h1>
                    <p className="w-[20.4375rem] sm:w-[24.875rem] lg:w-[29.75rem] text-[0.9375rem] text-black leading-[1.5625rem] font-normal">
                        We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.
                    </p>
                </div>
                <button type="button" className="text-white text-lg font-extrabold leading-normal w-[11.0625rem] h-[4.5rem] bg-[#F94F4F] hover:bg-[#FF9393] transition-colors duration-300 ease-in-out cursor-pointer">
                    Learn More
                </button>
            </div>
            <img src={imageSrc} alt="Hero image showcasing branding and website design" className="top-0 w-full h-auto bg-cover sm:absolute sm:right-0" loading="lazy" />
        </section>
    );
}

export default Branding;