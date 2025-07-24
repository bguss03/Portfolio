import Foto from "../../../public/Foto.jpg"
import TextType from "../../assets/TextType/TextType"

export default function Hero() {
    return (
        <div className="grid grid-cols-2 items-center bg-black min-h-screen pl-10 md:pl-20">
            <div >
                <h1 className="text-white text-7xl font-bold italic">Hi, Saya Bagus</h1>
                <TextType
                    className="text-6xl italic font-bold"
                    text={["Front End Developer", "Fullstack Enthusiast"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
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

            <img
                src={Foto}
                alt="Foto Bagus"
                style={{ width: '500px' }}
                className="flex justify-end px-4 rounded-full ml-18"
            />
        </div>
    )
}