import { Certificate } from "../../data"

export default function Sertifikat() {
  return (
    <div>
      <div>
        <h1 className="text-6xl text-center italic font-bold">Certificate</h1>
      </div>
      <div className="">
        {Certificate.map((certificate) => (
          <div className="border border-zinc-700 rounded-3xl overflow-hidden flex flex-col h-full"
            key={certificate.id}>
              <div className="w-full overflow-hidden">
                  <img src={certificate.file} alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}
