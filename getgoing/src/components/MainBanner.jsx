import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#dc2626",
        fontSize: "80px",
        right: "-20px",
        zIndex: 10
      }}
      onClick={onClick}
    >
      &#62;
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#dc2626",
        fontSize: "80px",
        left: "-50px",
        zIndex: 10
      }}
      onClick={onClick}
    >
      &#60;
    </div>
  );
}

const MainBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="px-20 py-10">
      <Slider {...settings}>
        {/* banner 1 */}
        <div className="h-96"> 
          <div className="grid grid-cols-2 gap-8 h-full"> 
            <div className="relative">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/webImages%2F1689692364277swiss%202%20(1)-min.JPG?alt=media&token=e4b0843f-875b-4bbe-b8bc-642318848bca"
                className="rounded-2xl h-96 w-full object-cover"
                alt="Banner 1"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent rounded-b-2xl" />
            </div>
            <div className="flex flex-col items-center justify-center h-96"> 
              <p style={{ letterSpacing: "0.25em" }} className="text-center text-gray-400 text-md font-light">
                EKSPLOR DAN NIKMATI MUDAH LIBURAN KE LUAR NEGRI DENGAN
              </p>
              <p className="text-center text-gray-800 font-bold text-3xl mt-5">
                Aplikasi GetGoing
              </p>
              <p style={{ letterSpacing: "0.25em" }} className="text-center text-gray-400 text-md font-light mt-5">
                DAPAT DI DOWNLOAD DI :
              </p>
              <div className="grid grid-cols-2 gap-10 mt-5">
                <a href="javascript:void(0)" className="text-white text-md">
                  <img src="https://getgoing.co.id/content/svg/AppStore.svg" alt="appstore" className="w-44" />
                </a>
                <a href="javascript:void(0)" className="text-white text-md">
                  <img src="https://getgoing.co.id/content/svg/GooglePlay.svg" alt="playstore" className="w-44" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* banner 2 */}
        <div className="h-96"> 
          <div className="grid grid-cols-2 gap-8 h-full"> 
            <div className="relative">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/webImages%2F1689692183775IMG_1600.JPG?alt=media&token=0da0739c-fc65-4944-80d9-9e6b45d7af11"
                className="rounded-2xl h-96 w-full object-cover"
                alt="Banner 2"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent rounded-b-2xl" />
            </div>
            <div className="flex flex-col items-center justify-center h-96"> 
              <p style={{ letterSpacing: "0.25em" }} className="text-center text-gray-400 text-md font-light mb-5">
                APA YANG GETGOING PUNYA?
              </p>
              <div className="grid gap-6 w-full max-w-lg mt-5">
                <div className="flex items-center space-x-8 cursor-pointer hover:-translate-y-2 transition-all">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-bold text-lg text-gray-800">Trip Planner</p>
                    <p className="font-bold bg-gray-100 p-2 rounded-md text-xs text-gray-800">Susun Rute Perjalananmu Sendiri</p>
                  </div>
                </div>
                <div className="flex items-center space-x-8 cursor-pointer hover:-translate-y-2 transition-all">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-bold text-lg text-gray-800">Guide</p>
                    <p className="font-bold bg-gray-100 p-2 rounded-md text-xs text-gray-800">Susun Rute Perjalananmu Sendiri</p>
                  </div>
                </div>
                <div className="flex items-center space-x-8 cursor-pointer hover:-translate-y-2 transition-all">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-bold text-lg text-gray-800">Trip Planner</p>
                    <p className="font-bold bg-gray-100 p-2 rounded-md text-xs text-gray-800">Susun Rute Perjalananmu Sendiri</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MainBanner;