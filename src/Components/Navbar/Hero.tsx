import Foto from "../../assets/images/Foto.jpg";
import TextType from "../../assets/TextType/TextType";
import Resume from "../../assets/file/CV_Ananda Bagus Shevchenko.pdf"


export default function Hero() {
    return (
        <div>
            <div className="flex flex-col-reverse sm:flex-row items-center
                    sm:justify-center pt-5 sm:pt-15 gap-16 p-25">
                <div className="flex flex-col px-10 items-center sm:items-start sm:text-left min-w-[350px] sm:min-w-[550px]" data-aos='fade-up' data-aos-delay={200}>
                    <h1 className="text-3xl font-bold italic 
                            [text-shadow:2px_2px_4px_rgba(34,211,238,0.6)] sm:text-5xl">Hi, I am  Bagus </h1>
                    <div className="text-animation">
                        <TextType
                            className="text-2xl sm:text-4xl italic font-bold [text-shadow:2px_2px_4px_rgba(34,211,238,0.6)]"
                            text={["A Front End Developer", "& Fullstack Enthusiast"]}
                            typingSpeed={100}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="_"
                            cursorClassName="text-white"
                        />
                    </div>
                    <div className="flex items-center mt-5">
                        <a href={Resume} target="blank" download={Resume} className="bg-[#77BEF0] hover:bg-[#113F67] flex sm:flex rounded-2xl sm:rounded-2xl p-3 items-center font-bold">
                            Get Resume
                            {/* <i className="ri-download-line ri-lg"></i> */}
                        </a>
                    </div>
                </div>
                <div className="flex" data-aos='fade-up' data-aos-delay={300}>
                    <img
                        src={Foto}
                        alt="Foto Bagus"
                        className="w-75 h-80 sm:w-80 sm:h-80 lg:w-90 lg:h-96 object-cover rounded-full shadow-2xl shadow-cyan-50"
                    />
                </div>
            </div>
        </div>

    );
}