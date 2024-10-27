import NavBar from "../components/NavBar";

export default function Home() {
    return (
        <>
            <NavBar />


            <div className="font-[sans-serif] bg-white">
                <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
                        Premium Sneakers
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
                        <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                            <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    className="fill-gray-800 inline-block"
                                    viewBox="0 0 64 64"
                                >
                                    <path
                                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                        data-original="#000000"
                                    />
                                </svg>
                            </div>
                            <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                                <img
                                    src="https://readymadeui.com/images/product9.webp"
                                    alt="Product 1"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-extrabold text-gray-800">
                                    Sole Elegance
                                </h3>
                                <p className="text-gray-600 text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <h4 className="text-lg text-gray-800 font-bold mt-4">$10</h4>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                            <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    className="fill-gray-800 inline-block"
                                    viewBox="0 0 64 64"
                                >
                                    <path
                                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                        data-original="#000000"
                                    />
                                </svg>
                            </div>
                            <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                                <img
                                    src="https://readymadeui.com/images/product10.webp"
                                    alt="Product 2"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-extrabold text-gray-800">
                                    Urban Sneakers
                                </h3>
                                <p className="text-gray-600 text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <h4 className="text-lg text-gray-800 font-bold mt-4">$12</h4>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                            <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    className="fill-gray-800 inline-block"
                                    viewBox="0 0 64 64"
                                >
                                    <path
                                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                        data-original="#000000"
                                    />
                                </svg>
                            </div>
                            <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                                <img
                                    src="https://readymadeui.com/images/product11.webp"
                                    alt="Product 3"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-extrabold text-gray-800">Velvet Boots</h3>
                                <p className="text-gray-600 text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <h4 className="text-lg text-gray-800 font-bold mt-4">$14</h4>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                            <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    className="fill-gray-800 inline-block"
                                    viewBox="0 0 64 64"
                                >
                                    <path
                                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                        data-original="#000000"
                                    />
                                </svg>
                            </div>
                            <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                                <img
                                    src="https://readymadeui.com/images/product12.webp"
                                    alt="Product 3"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-extrabold text-gray-800">
                                    Summit Hiking
                                </h3>
                                <p className="text-gray-600 text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <h4 className="text-lg text-gray-800 font-bold mt-4">$12</h4>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                            <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    className="fill-gray-800 inline-block"
                                    viewBox="0 0 64 64"
                                >
                                    <path
                                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                        data-original="#000000"
                                    />
                                </svg>
                            </div>
                            <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                                <img
                                    src="https://readymadeui.com/images/product13.webp"
                                    alt="Product 3"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-extrabold text-gray-800">Zenith Glow</h3>
                                <p className="text-gray-600 text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <h4 className="text-lg text-gray-800 font-bold mt-4">$15</h4>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                            <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    className="fill-gray-800 inline-block"
                                    viewBox="0 0 64 64"
                                >
                                    <path
                                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                        data-original="#000000"
                                    />
                                </svg>
                            </div>
                            <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                                <img
                                    src="https://readymadeui.com/images/product14.webp"
                                    alt="Product 3"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-extrabold text-gray-800">
                                    Echo Elegance
                                </h3>
                                <p className="text-gray-600 text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <h4 className="text-lg text-gray-800 font-bold mt-4">$14</h4>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                            <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    className="fill-gray-800 inline-block"
                                    viewBox="0 0 64 64"
                                >
                                    <path
                                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                        data-original="#000000"
                                    />
                                </svg>
                            </div>
                            <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                                <img
                                    src="https://readymadeui.com/images/product15.webp"
                                    alt="Product 3"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-extrabold text-gray-800">Pumps</h3>
                                <p className="text-gray-600 text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <h4 className="text-lg text-gray-800 font-bold mt-4">$14</h4>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                            <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    className="fill-gray-800 inline-block"
                                    viewBox="0 0 64 64"
                                >
                                    <path
                                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                        data-original="#000000"
                                    />
                                </svg>
                            </div>
                            <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                                <img
                                    src="https://readymadeui.com/images/product10.webp"
                                    alt="Product 3"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-extrabold text-gray-800">Blaze Burst</h3>
                                <p className="text-gray-600 text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <h4 className="text-lg text-gray-800 font-bold mt-4">$14</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer */}
            <footer className="bg-[#CC0100] font-sans tracking-wide">
                <div className="pb-5 pt-10 px-6 sm:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 justify-between px-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-between">
                            <div>
                                <h4 className="text-lg font-semibold mb-8 text-white">INFORMASI KONTAK</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <h1
                                            href="javascript:void(0)"
                                            className="text-white text-sm"
                                        >
                                            BSD Green Office Park 1, 6th Floor, BSD City, Tangerang, Banten 15345
                                        </h1>
                                    </li>
                                    <li>
                                        <h1
                                            href="javascript:void(0)"
                                            className="text-white text-sm"
                                        >
                                            24/7 - Online
                                        </h1>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="text-white text-sm"
                                        >
                                            lets@getgoing.co.id
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="text-white text-sm"
                                        >
                                            @getgoing.co.id
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="text-white text-sm"
                                        >
                                            @getgoing.co.id
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <img src="https://getgoing.co.id/content/img/MockupApp.png" alt="logo" className="w-full" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-between">
                            <div>
                                <h4 className="text-lg font-semibold mb-8 text-white">DOWNLOAD DI</h4>
                                <ul className="flex gap-4">
                                    <li>
                                        <a href="javascript:void(0)">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                className="fill-gray-300 inline hover:fill-white w-6 h-6"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="text-white"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                className="fill-gray-300 inline hover:fill-white w-6 h-6"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="text-white"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                className="fill-gray-300 inline hover:fill-white w-6 h-6"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="text-white"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                className="fill-gray-300 inline hover:fill-white w-6 h-6"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-8 text-white">LAINNYA</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="text-white text-sm"
                                        >
                                            Syarat & Ketentuan
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="text-white text-sm"
                                        >
                                            Kebijakan Privasi
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="text-white text-sm"
                                        >
                                            Dokumentasi
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="text-white text-sm"
                                        >
                                            Penghargaan
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center py-5 bg-black">
                    <p className="text-white text-sm">© 2024 - PT. Gue Eksplorasi Terus. All rights reserved.</p>
                </div>
            </footer>


        </>
    )
}   