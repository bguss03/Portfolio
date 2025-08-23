import { Certificate } from "../../data";
import { useState } from "react";

interface SertifikatData {
  id: number,
  name: string,
  ket: string,
  image: string;
}

export default function Sertifikat() {
  const [modalData, setModalData] = useState<SertifikatData | null>(null);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const handleOpen = (sertifikatData: SertifikatData) => {
    setModalData(sertifikatData);
    const modal = document.getElementById('sertifikatModal') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      const modal = document.getElementById('sertifikatModal') as HTMLDialogElement;
      if (modal) {
        modal.close();
      }
      setModalData(null);
      setIsClosing(false);
    }, 300);
  };

  return (
    <div className="text-center py-10" data-aos="fade-up" >
      <div className="p-6 text-center" data-aos="fade-up">
        <h1 className="text-4xl italic font-bold">Certificate</h1>
      </div>

      <div className="sertifikat-box px-4 md:px-16 lg:px-15 xl:px-60mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {Certificate.map((Certificates, index) => (
          <div
            className="border border-[#EEE6CA] dark:border-zinc-700 rounded-2xl hover:shadow-md shadow-black delay-100 overflow-hidden flex flex-col h-full cursor-pointer"
            key={Certificates.id}
            onClick={() => handleOpen(Certificates)}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="w-full overflow-hidden">
              <img
                src={Certificates.image}
                alt={Certificates.name}
                className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h1 className="text-2xl font-bold my-2">{Certificates.name}</h1>
              <p className="text-base/loose mb-4 opacity-70 flex-grow">{Certificates.ket}</p>
            </div>
          </div>
        ))}
      </div>

      <dialog
        id="sertifikatModal"
        className={`modal modal-middle sm:modal-middle ${isClosing ? 'modal-closing' : ''}`}
      >
        <form method="dialog" className="modal-box bg-[#f4f8e5] dark:bg-zinc-800 rounded-2xl">
          {modalData && (
            <div>
              <img
                src={modalData.image}
                alt={modalData.name}
                className="py-4 w-full rounded-2xl object-contain"
              />
              <h3 className="font-bold text-2xl">{modalData.name}</h3>
              <p className="py-4">{modalData.ket}</p>
            </div>
          )}
          <div className="modal-action mt-6">
            <button className="btn border-0 rounded-2xl" type="button" onClick={handleClose}>Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}