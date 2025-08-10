import { Certificate } from "../../data"
import { Certificates } from "../../data"

// const handleClick = () => {
//   alert("Halo ini percobaan");
// }

export default function Sertifikat() {
  return (
    <div data-aos="fade-up">
      <div>
        <h1 className="text-4xl text-center italic font-bold">Certificate</h1>
      </div>
      <div className="project-box px-4 md:px-16 lg:px-60 mt-10 flex justify-center">
        {Certificates.map((certificates, index) => (
          <div className="border border-zinc-700 rounded-3xl overflow-hidden flex flex-col h-full w-full md:w-1/2 lg:w-[48%]"
            key={certificates.id} data-aos="fade-up" data-aos-delay={index * 200}>
            <div className="w-full overflow-hidden">
              {/* <iframe src={certificate.file} className="w-full h-full "></iframe> */}
              <img src={certificates.image} alt="" className="object-cover" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h1 className="text-2xl font-bold my-2">{certificates.name}</h1>
              <p className="text-base/loose mb-4 opacity-70">{certificates.ket}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="project-box px-4 md:px-16 lg:px-60 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {Certificate.map((certificate, index) => (
          <div className="border border-zinc-700 rounded-3xl overflow-hidden flex flex-col h-full"
            key={certificate.id} data-aos="fade-up" data-aos-delay={index * 300}>
            <div className="w-full overflow-hidden">
              {/* <iframe src={certificate.file} className="w-full h-full "></iframe> */}
              <img src={certificate.image} alt="" className="w-full h-70 object-cover" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h1 className="text-2xl font-bold my-2">{certificate.name}</h1>
              <p className="text-base/loose mb-4 opacity-70">{certificate.ket}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
