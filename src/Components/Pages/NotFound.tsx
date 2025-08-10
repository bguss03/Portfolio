import Navbar from "../Navbar/Navbar"

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-1 items-center justify-center" data-aos="fade-up" data-aos-delay={200}>
                <h1 className="text-6xl italic font-bold">Not Found</h1>
            </div>
        </div>
    )
}
