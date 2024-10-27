import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Review = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const reviews = [
        {
            text: "GetGoing bikin liburan keluar negeri tanpa rasa khawatir dan bener-bener kerasa kayak cuma punya kami berdua. Apalagi ada aplikasinya juga yang bisa dipakai untuk mengeksplor kota dengan informasinya yang cukup lengkap. Bintang 5 pokoknya",
            image: "https://ik.imagekit.io/getgoing/tr:w-500,h-500/v0/b/getgoing-prod.appspot.com/o/CMS%2F171135077820230216_150747-min.jpg?alt=media&token=78f902bb-6967-457e-92cd-1877248b4460",
            title: "Keluar negeri pertama kali tanpa rasa khawatir",
            name: "Herlika & Johan",
            occ: "ENTREPENEUR"
        },
        {
            text: `Best banget segalanya mau aku recokin kapanpun (bahkan tengah malampun ready hahaha) Bener2 seperti yg ku mau, yakni sistem "partner trip" bukan "jasa tour".
Temen2 yg di kirim ke aku buat nemenin jg baik2 n sabar2.. Thankyouuu banyak yah mbaa See you aku recokin di negara2 lain ya mbaaa.`,
            image: "https://ik.imagekit.io/getgoing/tr:w-500,h-500/v0/b/getgoing-prod.appspot.com/o/CMS%2F1711350675Image_20221216_075245_899%20(1).jpeg?alt=media&token=05ac57ca-86f1-424d-a4f7-8d260f64e9f9",
            title: "Liburan seperti yang aku mau",
            name: "Hilda",
            occ: "ENTREPENEUR"
        },
        {
            text: `Sekali lagi, terima kasih semua yg tak terhingga pada All Team GetGoing yang SUPER DUPER KEREN! yang udah gercep pandu kita, gercep belikan tiket reshecedhule kemarin, kasih ide2 get lost yang mantap, kasih hotel yang nyaman dil semua nya yg ga bisa saya sebutkan satu per satu... Alhamdulillah ini liburan keluarga yg sgt berkesan dan menyenangkan, dan bucket list impian ke swiss bisa terwujud... Alhamdulillaaah 0000
THE BEST BUAT GETGOING TEAM KALIAAAN`,
            image: "https://ik.imagekit.io/getgoing/tr:w-500,h-500/v0/b/getgoing-prod.appspot.com/o/CMS%2F1711351458D489AF07-D4B4-47D7-A6C1-966BE41F01F7%20(1)-min.jpg?alt=media&token=8ba3ff45-2dff-4e6d-8af4-073b7623813a",
            title: "Liburan keluarga yang sangat berkesan dan menyenangkan",
            name: "Winda & Kiky",
            occ: "BANKER"
        },
        
    ];

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden p-20">
            <div className="w-full md:w-1/2 p-8 relative overflow-hidden space-y-4">
                <h2 className="text-2xl text-gray-800 font-bold mb-4">{reviews[currentIndex].title}</h2>
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentIndex}
                        className="absolute top-16 left-8 right-8"
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -300 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-gray-400 mb-4 text-sm">{reviews[currentIndex].text}</p>
                    </motion.div>
                </AnimatePresence>
                <div className="flex mt-4 absolute bottom-8 left-8">
                    <button onClick={prevReview} className="mr-2 text-gray-800  text-3xl">
                    <div className='bg-gray-200 hover:bg-red-600 p-2 rounded-full cursor-pointer'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="16px"
                                    className="fill-gray-800"
                                >
                                    <path d="M20 12H4M10 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                    </button>
                    <button onClick={nextReview} className="text-gray-800 text-3xl">
                    <div className='bg-gray-200 hover:bg-red-600 p-2 rounded-full cursor-pointer'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="16px"
                                    className="fill-gray-800"
                                >
                                    <path d="M4 12h16m-6-6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                    </button>
                </div>
            </div>
            <div className="w-full md:w-1/2 relative h-96">
                <div className="absolute inset-0 flex items-center justify-center">
                    <AnimatePresence>
                        {reviews.map((review, index) => {
                            const offset = (index - currentIndex + reviews.length) % reviews.length;
                            const isCenter = offset === 0;
                            const isLeft = offset === reviews.length - 1;
                            const isRight = offset === 1;
                            
                            return (
                                <motion.div
                                    key={index}
                                    className="absolute w-2/3 h-4/5 bg-white shadow-lg p-4"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                        opacity: isCenter ? 1 : 0.7,
                                        scale: isCenter ? 1 : 0.8,
                                        zIndex: isCenter ? 3 : isLeft || isRight ? 2 : 1,
                                        x: isLeft ? -100 : isRight ? 100 : 0
                                    }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="w-full h-5/6 mb-2 overflow-hidden">
                                        <img 
                                            src={review.image} 
                                            alt={`Review by ${review.name}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="h-1/6 flex-col text-center items-center justify-center">
                                        <p className="text-sm text-gray-800 font-bold">{review.name}</p>
                                        <p className="text-sm text-gray-800">{review.occ}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Review;
