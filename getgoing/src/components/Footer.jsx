const Footer = () => {
    return (
        <footer style={{ fontFamily: "Poppins" }} className="bg-[#CC0100] font-sans tracking-wide">
            <div className="pb-2 pt-10 px-6 sm:px-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-items-start">
                        <div>
                            <h4 className="text-md font-bold mb-5 text-white">INFORMASI KONTAK</h4>
                            <ul className="space-y-1">
                                <li>
                                    <div className="flex items-start space-x-2">
                                        <img src="https://getgoing.co.id/content/img/icon/pin.png" alt="location" className="w-8 h-8" />
                                        <p
                                            href="javascript:void(0)"
                                            className="text-white text-md"
                                        >
                                            BSD Green Office Park 1, 6th Floor, BSD City, Tangerang, Banten 15345
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center space-x-2">
                                        <img src="https://getgoing.co.id/content/img/icon/clock.png" alt="location" className="w-8 h-8" />
                                        <p className="text-white text-md">24/7 - Online</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center space-x-2">
                                        <img src="https://getgoing.co.id/content/img/icon/email.png" alt="location" className="w-8 h-8" />
                                        <a href="https://getgoing.co.id/#:~:text=24/7%20%2D%20Online-,lets%40getgoing.co.id,-%40getgoing.co.id" className="text-white text-md hover:border-b">lets@getgoing.co.id</a>
                                    </div>
                                </li>
                                <li>
                                <div className="flex items-center space-x-2">
                                        <img src="https://getgoing.co.id/content/img/icon/instagram.png" alt="location" className="w-8 h-8" />
                                        <a href="https://www.instagram.com//getgoing.co.id" className="text-white text-md hover:border-b">@getgoing.co.id</a>
                                    </div>
                                </li>
                                <li>
                                <div className="flex items-center space-x-2">
                                        <img src="https://getgoing.co.id/content/img/icon/facebook.png" alt="location" className="w-8 h-8" />
                                        <a href="https://www.facebook.com/getgoing.co.id" className="text-white text-md hover:border-b">@getgoing.co.id</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img src="https://getgoing.co.id/content/img/MockupApp.png" alt="logo" className="w-full" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-items-end">

                        <div>
                            <h4 className="text-md font-bold mb-5 text-white">DOWNLOAD DI</h4>
                            <ul className="space-y-0">
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="text-white text-md"
                                    >
                                        <img src="https://getgoing.co.id/content/svg/AppStore.svg" alt="appstore" className="w-44" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="text-white text-md"
                                    >
                                        <img src="https://getgoing.co.id/content/svg/GooglePlay.svg" alt="appstore" className="w-44" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-md font-bold mb-5 text-white">LAINNYA</h4>
                            <ul className="space-y-1">
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="text-white text-md hover:border-b"
                                    >
                                        Syarat & Ketentuan
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="text-white text-md hover:border-b"
                                    >
                                        Kebijakan Privasi
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="text-white text-md hover:border-b"
                                    >
                                        Dokumentasi
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="text-white text-md hover:border-b"
                                    >
                                        Penghargaan
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="text-white text-md hover:border-b"
                                    >
                                        Login
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="text-white text-md hover:border-b"
                                    >
                                        Press
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="text-white text-md hover:border-b"
                                    >
                                        F.A.Q
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-start py-5 bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-20">
                <p className="text-white text-sm justify-items-start">© 2024 - PT. Gue Eksplorasi Terus. All rights reserved.</p>
                <div className="flex justify-end gap-x-4">
                    <a
                        href="javascript:void(0)"
                        className="text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="fill-red-500 inline hover:fill-red-700 w-6 h-6"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z" />
                        </svg>
                    </a>
                    <a href="javascript:void(0)">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="fill-red-500 inline hover:fill-red-700 w-6 h-6"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>

        </footer>
    )
}

export default Footer;