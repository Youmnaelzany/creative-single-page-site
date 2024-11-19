import { useState, useCallback, useMemo } from "react";
import Logo from "../assets/desktop/logo.svg";
import HamburgerIcon from "../assets/mobile/icon-hamburger.svg";
import CrossIcon from "../assets/mobile/icon-cross.svg";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Service", href: "/service" },
    { name: "Projects", href: "/projects" },
];

interface NavLink {
    name: string;
    href: string;
}

const MobileNavigation = ({ navLinks }: { navLinks: NavLink[] }) => (
    <nav className="bg-[#191921] absolute top-[6.875rem] right-6 w-[15.75rem] pb-7 pl-[1.69rem] pr-[1.62rem] pt-8 z-50 space-y-6">
        <ul className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
                <li key={link.name}>
                    <a href={link.href} className="text-lg font-normal leading-8 text-white">
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
        <button className="text-white text-base font-extrabold leading-normal w-[12.4375rem] bg-[#F94F4F] h-16">
            Schedule a Call
        </button>
    </nav>
);

function useMobileNavigationToggle() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    const Icon = isOpen ? CrossIcon : HamburgerIcon;

    return { isOpen, toggle, Icon };
}

const Header = () => {
    const { isOpen, toggle, Icon } = useMobileNavigationToggle();

    const renderNavLinks = useMemo(() => (
        navLinks.map((link) => (
            <li key={link.name}>
                <a href={link.href} className="text-white text-[0.9375rem] font-normal leading-8 hover:font-bold transition-all duration-300 ease-in-out">
                    {link.name}
                </a>
            </li>
        ))
    ), []);

    return (
        <header className="relative flex items-center justify-between">
            <div className="flex items-center gap-[8.88rem] px-6 py-10 sm:pl-[2.44rem] sm:py-[4.62rem] lg:pl-[10.31rem] lg:py-16">
                <img src={Logo} alt="Company logo" />
                <button
                    className="cursor-pointer sm:hidden"
                    onClick={toggle}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    <img src={Icon} alt="" />
                </button>
            </div>
            {isOpen && <MobileNavigation navLinks={navLinks} />}
            <nav className="hidden sm:flex sm:items-center sm:justify-between sm:gap-x-7 sm:pr-10 lg:pr-[10.31rem] lg:py-16 sm:py-[3.56rem] sm:pl-[2.06rem] lg:gap-x-[2.94rem] lg:pl-[4.31rem] bg-[#F94F4F]">
                <ul className="flex items-center sm:gap-x-5 lg:gap-x-10">
                    {renderNavLinks}
                </ul>
                <button className="text-white text-base font-extrabold leading-normal w-[9.1875rem] bg-[#191921] h-16 lg:w-[12.4375rem] hover:bg-[#434356] transition-colors duration-300 ease-in-out">
                    Schedule a Call
                </button>
            </nav>
        </header>
    );
};

export default Header;