import { Certificate } from "../../data";
import { useState, useRef } from "react";

interface SertifikatData {
  id: number;
  name: string;
  ket: string;
  image: string;
}

export default function Sertifikat() {
  const [modalData, setModalData] = useState<SertifikatData | null>(null);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleOpen = (sertifikatData: SertifikatData) => {
    setModalData(sertifikatData);
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.close();
      }
      setModalData(null);
      setIsClosing(false);
    }, 300);
  };

  return (
    <div className="text-center py-16" data-aos="fade-up">
      <div className="p-6 text-center" data-aos="fade-up">
        <h1 className="text-3xl sm:text-4xl italic font-bold">Certificate</h1>
      </div>

      <div className="sertifikat-box max-w-2xl mx-auto px-10 sm:px-3 mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {Certificate.map((Certificates, index) => (
          <div
            className="group bg-zinc-800/50 border border-zinc-700 overflow-hidden cursor-pointer transition-all duration-300 hover:border-zinc-500 hover:shadow-2xl hover:shadow-white/5"
            key={Certificates.id}
            onClick={() => handleOpen(Certificates)}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="overflow-hidden">
              <img
                src={Certificates.image}
                alt={Certificates.name}
                className="w-full aspect-[5/4] sm:aspect-[4/3] object-cotain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal sertifikat*/}
      <dialog
        id="sertifikatModal"
        ref={modalRef}
        className={`modal modal-middle sm:modal-middle ${isClosing ? 'modal-closing' : ''}`}
      >
        <form method="dialog" className="modal-box bg-[#f4f8e5] dark:bg-zinc-800 rounded-2xl max-w-3xl">
          {modalData && (
            <div>
              <img
                src={modalData.image}
                alt={modalData.name}
                className="w-full rounded-lg object-contain"
                data-aos="flip-left"
              />
              <div className="mt-4 text-left">
                <h3 className="font-bold text-2xl">{modalData.name}</h3>
                <p className="py-4">{modalData.ket}</p>
              </div>
            </div>
          )}
          <div className="modal-action mt-2">
            <button className="btn border-0 rounded-xl" type="button" onClick={handleClose}>Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}