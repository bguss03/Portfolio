import { useState } from "react";
import { Certificate } from "../../data"
import { Certificates } from "../../data"

interface SertifikatData {
  id: number,
  name: string,
  ket: string,
  image: string;
}

export default function Sertifikat() {

  const [modalData, setModalData] = useState < SertifikatData | null>(null);
  const [isClosing, setIsClosing] = useState <boolean>(false); 
  // const [isImageFullScreen, setIsImageFullScreen] = useState<boolean>(false);
  // const [fullScreenImageURL, setFullScreenImageURL] = useState<string>('');

  //handleOpen Modal
  const handleOpen = (sertifikatData: SertifikatData) => {
    setModalData(sertifikatData);
    const modal = document.getElementById('sertifikatModal') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  //handleCloseModal
const handleClose = () => {
    setIsClosing(true); 
    setTimeout(() => {
      const modal = document.getElementById('sertifikatModal') as HTMLDialogElement;
      if (modal) {
        modal.close(); 
      }
      setModalData(null);
      setIsClosing(false); 
    }, 100); 
};

  //handleImageClick
  // const handleImageClick = (imageurl: SertifikatData) => {
  //   setFullScreenImageURL(Sertifikat.imageUrl);
  //   setIsImageFullScreen(true);
  // };

  return (
    <div data-aos="fade-up">
      <div>
        <h1 className="text-4xl text-center italic font-bold">Certificate</h1>
      </div>
      <div className="project-box px-4 md:px-16 lg:px-60 mt-10 flex justify-center">
        {Certificates.map((certificates, index) => (
          <div className="border border-zinc-700 rounded-3xl overflow-hidden flex flex-col h-full w-full md:w-1/2 lg:w-[48%]
          cursor-pointer" key={certificates.id} data-aos="fade-up" data-aos-delay={index * 200} onClick={() => handleOpen(certificates)}>
            <div className="w-full overflow-hidden "
            >
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
          <div className="border border-zinc-700 rounded-3xl overflow-hidden flex flex-col h-full cursor-pointer"
            key={certificate.id} data-aos="fade-up" data-aos-delay={index * 300} onClick={()=> handleOpen(certificate)}>
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
      <dialog id="sertifikatModal" className={`modal modal-middle sm:modal-middle 
          ${isClosing} 'animate-fade-out' : 'animate-fade-in'`}>
        <div className="modal-box">
          {modalData && (
            <>
              <img src={modalData.image} alt={modalData.name} className="py-4 w-full rounded-2xl object-contain" />
              <h3 className="font-bold text-2xl">{modalData.name}</h3>
              <p className="py-4">{modalData.ket}</p>
            </>
          )}
          <div className="modal-action">
            <button className="btn" onClick={handleClose}>Close</button>
          </div>
        </div>
      </dialog>
    </div>
  )
}
