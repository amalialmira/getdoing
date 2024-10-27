import { useState } from "react";

const InfoButton = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            className={`fixed right-4 bottom-4 bg-white rounded-lg shadow-lg transition-all duration-300 ${isExpanded ? 'w-80 h-40 p-4' : 'w-12 h-16'
                }`}
            onClick={toggleExpand}
        >
            {isExpanded ? (
                <div className="h-full flex flex-col">
                    <div className="self-end">
                        <button 
                            className="text-gray-800 hover:text-black font-bold"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsExpanded(false);
                            }}
                        >
                            &#x2715;
                        </button>
                    </div>
                    <div className="flex items-center justify-between flex-grow">
                        <div>
                            <h3 className="text-lg font-bold text-red-600">Hubungi Kami</h3>
                            <p className="text-sm">Melalui IG atau WA</p>
                        </div>
                        <div className="flex space-x-2">
                            <a href="https://www.instagram.com/getgoing.co.id/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="https://wa.me/6281119190601?text=Hallo,%20Saya%20mau%20berlibur%20ke%20Eropa%20dengan%20Private%20Trip.%20Apakah%20bisa%20dibantu%20?" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center h-full">
                    <span className="text-xl font-extrabold text-gray-800">i</span>
                </div>
            )}
        </div>
    );
}

export default InfoButton