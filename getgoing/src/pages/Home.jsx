import Card3 from "../components/Card3";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Home() {
    return (
        <>
            <NavBar />

            {/* section baca juga */}
            <div style={{ fontFamily: "Poppins" }} className="bg-[#F5F5F5] py-28">
                <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <h2 className="text-3xl font-bold text-gray-800 justify-self-start">Baca Juga</h2>
                    <div className="justify-self-end font-bold text-red-600 border border-red-600 rounded-full px-4 py-2 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
                        <p>{`LIHAT SEMUA ARTIKEL >>`}</p>
                    </div>
                </div>
                <Card3 />
            </div>

            <Footer />
        </>
    )
}   