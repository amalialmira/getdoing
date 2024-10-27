import Card3 from "../components/Card3";
import CityCard from "../components/CityCard";
import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import NavBar from "../components/NavBar";
import PeopleCard from "../components/PeopleCard";

export default function Home() {
    return (
        <div style={{ fontFamily: "Poppins" }}>
            <NavBar />

            <MainBanner/>

            <div style={{ fontFamily: "Poppins" }} className="flex items-center justify-start text-3xl font-bold text-gray-800 mt-10 px-20">
                <p className="mr-2">Sedang</p>
                <p className="mr-2 text-red-600">Populer</p>
            </div>
            <PeopleCard />

            {/* quotes */}
            <div style={{ fontFamily: "Poppins" }} className="my-10">
                <div className="flex items-center justify-center text-3xl font-bold text-gray-800 mb-3">
                    <p className="mr-2">“Better to </p>
                    <p className="mr-2 text-red-600">SEE</p>
                    <p className="mr-2">something once than hear about it </p>
                    <p className="text-[#4283D1]">A THOUSAND TIMES" </p>
                </div>
                <p className="text-center text-xl font-bold text-gray-800">
                    - Asian Proverb.
                </p>
            </div>

            {/* private trip */}
            <div className="flex px-20 py-10 gap-20">
                <div className="w-2/3 space-y-5">
                        <p className="text-4xl text-red-600">PRIVATE TRIP</p>
                    <div className="pb-10">
                        <div className="flex">
                            <p className="text-4xl font-bold mr-2 drop-shadow-lg"
                            >Berangkat</p>
                            <p className="text-4xl font-bold text-red-600 drop-shadow-lg"
                            >Kapan Saja</p>
                        </div>
                        <p className="text-4xl font-bold drop-shadow-lg"
                        >Semaumu</p>
                    </div>
                    <div className="grid grid-cols-2 gap-5 px-10">
                        <div className="flex items-center space-x-2 p-2">
                            <img src="https://getgoing.co.id/content/img/icon/check-circle.png" alt="location" className="w-5 h-5" />
                            <p className="text-gray-500 text-md">
                                Tentukan tanggal keberangkatan sesukamu
                            </p>
                        </div>
                        <div className="flex items-center space-x-2 p-2">
                            <img src="https://getgoing.co.id/content/img/icon/check-circle.png" alt="location" className="w-5 h-5" />
                            <p className="text-gray-500 text-md">
                                Tidak ada kuota minimum, jadi pasti berangkat
                            </p>
                        </div>
                        <div className="flex items-center space-x-2 p-2">
                            <img src="https://getgoing.co.id/content/img/icon/check-circle.png" alt="location" className="w-5 h-5" />
                            <p className="text-gray-500 text-md">
                                Fleksibel, bebas tentukan destinasi dan aktivitas perjalanan
                            </p>
                        </div>
                        <div className="flex items-center space-x-2 p-2">
                            <img src="https://getgoing.co.id/content/img/icon/check-circle.png" alt="location" className="w-5 h-5" />
                            <p className="text-gray-500 text-md">
                                Liburan jadi lebih exclusive untuk kamu dan keluarga
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-2/3 bg-gradient-to-r from-[#D10305] to-[#FE9F21] rounded-l-[50px] px-10 py-14">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="space-y-2 bg-white bg-opacity-25 p-4 rounded-xl">
                            <img src="https://getgoing.co.id/content/img/servis-kami/support-gradient.png"
                            className="bg-white rounded-xl max-w-14 p-2"
                            />
                            <p className="text-white font-bold">
                                Konsultasi Gratis
                            </p>
                            <p className="text-white">
                                Curhatin aja semuanya!
                            </p>
                        </div>
                        <div className="space-y-2 bg-white bg-opacity-25 p-4 rounded-xl">
                            <img src="https://getgoing.co.id/content/img/servis-kami/person-pin-gradient.png"
                            className="bg-white rounded-xl max-w-14 p-2"
                            />
                            <p className="text-white font-bold">
                                Local Guide
                            </p>
                            <p className="text-white">
                            Biar ada temen!
                            </p>
                        </div>
                        <div className="space-y-2 bg-white bg-opacity-25 p-4 rounded-xl">
                            <img src="https://getgoing.co.id/content/img/servis-kami/commute-gradient.png"
                            className="bg-white rounded-xl max-w-14 p-2"
                            />
                            <p className="text-white font-bold">
                            Transportasi
                            </p>
                            <p className="text-white">
                            Bebas pilih transportasi apa
                            </p>
                        </div>
                        <div className="space-y-2 bg-white bg-opacity-25 p-4 rounded-xl">
                            <img src="https://getgoing.co.id/content/img/servis-kami/star-gradient.png"
                            className="bg-white rounded-xl max-w-14 p-2"
                            />
                            <p className="text-white font-bold">
                            Lengkap Pokoknya
                            </p>
                            <p className="text-white">
                            Hotel, Asuransi, Visa, Wifi dll
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ fontFamily: "Poppins" }} className="flex items-center justify-start text-3xl font-bold text-gray-800 mt-10 px-20">
                <p className="mr-2">Kota</p>
                <p className="mr-2 text-red-600">Populer</p>
            </div>
            <CityCard/>

            {/* kata mereka */}
            <div style={{ fontFamily: "Poppins" }} className="my-10 mt-10">
                <div className="flex items-center justify-center text-3xl font-bold text-gray-800 mb-3">
                    <p className="mr-2 drop-shadow-lg">Kata</p>
                    <p className="text-red-600 drop-shadow-lg">Mereka</p>
                </div>
                <p className="text-center text-lg text-gray-400">
                Cerita dari mereka yang telah menjelajahi Eropa bersama kami
                </p>
            </div>

            {/* section baca juga */}
            <div style={{ fontFamily: "Poppins" }} className="bg-[#F5F5F5] py-20">
                <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <h2 className="text-3xl font-bold text-gray-800 justify-self-start">Baca Juga</h2>
                    <div className="justify-self-end font-bold text-red-600 border border-red-600 rounded-full px-4 py-2 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
                        <p style={{ letterSpacing: "0.25em" }} className="text-sm">{`LIHAT SEMUA ARTIKEL >>`}</p>
                    </div>
                </div>
                <Card3 />
            </div>

            <Footer />
        </div>
    )
}   