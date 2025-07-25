import Foto from "../../assets/images/Foto.jpg";
import TextType from "../../assets/TextType/TextType"

export default function Hero() {
    return (
        <div className="flex flex-col-reverse  sm:flex-row bg-black min-h-screen items-center
        sm:justify-center pt-5 sm:pt-0 gap-20 p-4">
        <div className="flex flex-col px-10 items-center sm:items-start sm:w-[700px]">
                <h1 className="text-white text-7xl font-bold italic 
                [text-shadow:2px_2px_4px_rgba(34,211,238,0.6)] ">Hi, Saya Bagus</h1>
                <TextType
                    className="text-6xl italic font-bold [text-shadow:2px_2px_4px_rgba(34,211,238,0.6)]"
                    text={["Front End Developer", "Fullstack Enthusiast"]}
                    typingSpeed={100}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="_"
                    cursorClassName="text-white"
                />
                <div className="flex items-center gap-4 text-white mt-5">
                    <a href="#" className="bg-[#77BEF0] hover:bg-[#113F67] hover:animate-bounce duration-100 delay-300 ease-in-out
                        hidden sm:flex rounded-2xl p-3 items-center gap-2">
                        Download Cv
                        <i className="ri-download-line ri-lg"></i>
                    </a>
                    <a href="#" className="bg-[#77BEF0] hover:bg-[#113F67] hover:animate-bounce duration-100 delay-300 ease-in-out
                        hidden sm:flex rounded-2xl p-3 items-center gap-2">
                        Lihat Projek
                        <i className="ri-arrow-right-line ri-lg"></i>
                    </a>
                </div>
            </div>
            <div className="flex-1">
                <img
                    src={Foto}
                    alt="Foto Bagus"
                    style={{ width: '500px', height: '400px' }}
                    className="w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl shadow-cyan-50"
                />
            </div>
        </div>
    )
}