import Card3 from "../components/Card3";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Home() {
    return (
        <>
            <NavBar />

            {/* quotes */}
            <div style={{ fontFamily: "Poppins" }} className="my-10">
            <div className="flex items-center justify-center text-3xl font-bold text-gray-800 mb-3">
                <p className="mr-2">“Better to </p>
                <p className="mr-2 text-red-500">SEE</p>
                <p className="mr-2">something once than hear about it </p>
                <p className="text-[#4283D1]">A THOUSAND TIMES" </p>
            </div>
            <p className="text-center text-xl font-bold text-gray-800">
            - Asian Proverb.

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
        </>
    )
}   