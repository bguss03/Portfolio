import { useState } from "react";
import { Project } from "../../data"

interface ProjectsData {
  id : number,
  name : string,
  ket : string,
  image : string,
  tools : string[];
}

export default function ProjectAll() {

  const [modalData, setModalData] = useState < ProjectsData | null > (null)
  
  const handleOpen = (projectsData : ProjectsData) => {
    setModalData(projectsData);
    const modal = document.getElementById('projectsModal') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  const handleClose = () => {
    const modal = document.getElementById('projectsModal') as HTMLDialogElement
    if (modal){
      modal.close();
    }
};

  return (
    <div>
      <div className="text-center pt-5" data-aos="fade-up" data-aos-delay={300}>
        <div>
          <h1 className="text-4xl md:text-6xl font-bold italic">Projects</h1>
        </div>
        <div className="project-box px-4 md:px-16 lg:px-60 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {Project.map((projek, index) => (
            <div
              className="border border-zinc-700 rounded-3xl overflow-hidden flex flex-col h-full cursor-pointer"
              key={projek.id}
              onClick={() => handleOpen(projek)}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src={projek.image}
                  alt={projek.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h1 className="text-2xl font-bold my-2">{projek.name}</h1>
                <p className="text-base/loose mb-4 opacity-70 flex-grow">{projek.ket}</p>
                <div className="flex flex-wrap gap-2">
                  {projek.tools.map((alat, index) => (
                    <p key={index} className="py-1 px-3 border border-zinc-500 rounded-lg font-semibold text-sm hover:bg-zinc-700">
                      {alat}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      <dialog id="projectsModal" className="modal modal-middle sm:modal-middle">
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
    </div>
  );
}
