import Foto from "../../assets/images/Foto.jpg";
import TextType from "../../assets/TextType/TextType";
import Resume from "../../assets/file/CV_Ananda Bagus Shevchenko.pdf"


export default function Hero() {
    return (
        // <div className="bg-gradient-to-t from-[#F5FAE1] to-violet-700 dark:bg-gradient-to-tl dark:from-zinc-900 dark:to-violet-900">
            <div className="flex flex-col-reverse sm:flex-row items-center
                    sm:justify-center pt-20 sm:pt-35 gap-16 p-25 min-h-screen">
                <div className="flex flex-col px-10 items-center sm:items-start sm:text-left min-w-[350px] sm:min-w-[550px]" data-aos='fade-up' data-aos-delay={200}>
                    <h1 className="text-3xl font-bold italic 
                            sm:text-5xl">Hi, I am  Bagus </h1>
                    <div className="text-animation py-2">
                        <TextType
                            className="text-2xl sm:text-4xl italic font-bold text-[#1B56FD]"
                            text={["A Front End Developer", "& Fullstack Enthusiast"]}
                            typingSpeed={100}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="_"
                        />
                    </div>
                    <div className="flex items-center mt-5">
                        <a href={Resume} target="blank" className="bg-[#1B56FD] hover:bg-[#134deb] flex sm:flex rounded-2xl sm:rounded-2xl p-2 px-5 items-center font-bold text-white">
                            Get Resume
                        </a>
                    </div>
                </div>
                <div className="flex" data-aos='fade-up' data-aos-delay={300}>
                    <img
                        src={Foto}
                        alt="Foto Bagus"
                        className="w-75 h-80 sm:w-80 sm:h-80 lg:w-90 lg:h-96 object-cover rounded-full shadow-2xl shadow-black dark:shadow-cyan-50"
                    />
                </div>
            </div>
        // </div>

    );
}