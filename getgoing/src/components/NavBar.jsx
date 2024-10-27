import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ fontFamily: "Poppins" }}>
            {/* Navbar atas */}
            <header className="tracking-wide relative z-50 px-20">
                <section className="md:flex lg:items-center relative py-3 lg:px-10 px-4 bg-white lg:min-h-[80px] max-lg:min-h-[60px]">
                    <a href="javascript:void(0)" className="max-sm:w-full max-sm:mb-3 shrink-0">
                        <img
                            src="https://getgoing.co.id/_next/static/images/LogoGetGoing-1b06f75eefdc319bb98ba925a24ee023.png"
                            alt="logo"
                            className="w-[190px] "
                        />
                    </a>
                    <div className="flex flex-wrap w-full items-center">
                        <div className='flex items-center bg-white shadow-[0_0_20px_rgba(220,38,38,0.8)] rounded-full pl-6 pr-2 py-1 overflow-hidden min-w-96 max-lg:hidden'>
                            <input
                                type='text'
                                placeholder='Cari negara, kota atau guide'
                                className='w-full text-sm bg-transparent outline-none pr-2 text-gray-600 placeholder-gray-500'
                            />
                            <div className='bg-red-600 p-2 rounded-full cursor-pointer'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="16px"
                                    className="fill-white"
                                >
                                    <path d="M4 12h16M14 6l6 6-6 6" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className="ml-auto max-lg:mt-4">
                            <ul className="flex items-center">
                                <li className="max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-bold text-red-500 cursor-pointer">
                                    Beranda
                                </li>
                                <li className="max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-red-500 cursor-pointer">
                                    Servis Kami
                                </li>
                                <li className="max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-red-500 cursor-pointer">
                                    Blog
                                </li>
                                <li className="flex text-[15px] max-lg:py-2 px-3 hover:text-[#007bff] hover:fill-[#007bff]">
                                    <button style={{letterSpacing: "0.25em"}} className="px-4 py-2 text-sm font-bold text-[#333] bg-transparent">
                                        LOGIN
                                    </button>
                                </li>
                                <li id="toggleOpen" className="lg:hidden">
                                    <button>
                                        <svg
                                            className="w-7 h-7"
                                            fill="#333"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </header>


            {/* Navbar scroll */}
            <nav
                className={`fixed top-0 left-1/2 -translate-x-1/2 w-[calc(100%-5rem)]  transition-all duration-300 z-50 bg-white bg-opacity-50 backdrop-blur-lg mt-5 rounded-full
                ${isScrolled ? 'text-white' : 'opacity-0'}`}
            >
                <header className="relative z-50 ">
                    <section className="md:flex lg:items-center relative py-3 lg:px-10 px-4 lg:min-h-[80px] max-lg:min-h-[60px]">
                        <a href="javascript:void(0)" className="max-sm:w-full max-sm:mb-3 shrink-0 mr-2">
                            <img
                                src="data:image/png;base64,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"
                                alt="logo"
                                className="w-[50px] "
                            />
                        </a>
                        <div className="flex flex-wrap w-full items-center">
                            <div className='flex items-center bg-white shadow-[0_0_20px_rgba(220,38,38,0.8)] rounded-full pl-6 pr-2 py-1 overflow-hidden min-w-96 max-lg:hidden'>
                                <input
                                    type='text'
                                    placeholder='Cari negara, kota atau guide'
                                    className='w-full text-sm bg-transparent outline-none pr-2 text-gray-600 placeholder-gray-500'
                                />
                                <div className='bg-red-600 p-2 rounded-full cursor-pointer'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="16px"
                                        className="fill-white"
                                    >
                                        <path d="M4 12h16M14 6l6 6-6 6" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-auto max-lg:mt-4">
                                <ul className="flex items-center">
                                    <li className="max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-bold text-red-500 cursor-pointer">
                                        Beranda
                                    </li>
                                    <li className="max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-red-500 cursor-pointer">
                                        Servis Kami
                                    </li>
                                    <li className="max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-red-500 cursor-pointer">
                                        Blog
                                    </li>
                                    <li className="flex text-[15px] max-lg:py-2 px-3 hover:text-[#007bff] hover:fill-[#007bff]">
                                        <button style={{letterSpacing: "0.25em"}}  className="px-4 py-2 text-sm font-semibold text-[#333] bg-transparent">
                                            LOGIN
                                        </button>
                                    </li>
                                    <li id="toggleOpen" className="lg:hidden">
                                        <button>
                                            <svg
                                                className="w-7 h-7"
                                                fill="#333"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;
