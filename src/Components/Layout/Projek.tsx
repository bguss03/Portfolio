import { Project } from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react"; 

const idSelect = [3, 4];
const projectsOnPage = Project.filter(myProjek => idSelect.includes(myProjek.id));

interface ProjectData {
  id : number,
  name : string,
  ket : string,
  image : string,
  tools : string[];
}

export default function Projek() {
  const [modalData, setModalData] = useState < ProjectData | null > (null);

  const handleOpen = (projectData : ProjectData) => {
    setModalData(projectData);
    const modal = document.getElementById('projectModal') as HTMLDialogElement ;
    if (modal) {
      modal.showModal();
    }
  };

  const handleClose = () => {
    const modal = document.getElementById('projectModal') as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  }

  return (
    <div className="text-center py-10" data-aos="fade-up">
      <div className="">
        <h1 className="text-4xl md:text-4xl font-bold italic">Projects</h1>
      </div>
      <div className="project-box px-4 md:px-16 lg:px-60 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsOnPage.map((project, index) => (
          <div
            className="border border-zinc-700 rounded-3xl overflow-hidden flex flex-col h-full cursor-pointer"
            key={project.id}
            onClick={() => handleOpen(project)} 
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-50 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h1 className="text-2xl font-bold my-2">{project.name}</h1>
              <p className="text-base/loose mb-4 opacity-70 flex-grow">{project.ket}</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <p key={index} className="py-1 px-2 border border-zinc-500 rounded-lg font-semibold text-sm hover:bg-zinc-700">
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <dialog id="projectModal" className="modal modal-middle sm:modal-middle">
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

      <div className="py-10" data-aos="fade-up" data-aos-delay={200}>
        <Link to="/project">
            <button className="w-40 h-13 bg-[#77BEF0] hover:bg-[#113F67] p-3 rounded-2xl italic text-center font-bold">More Projects</button>
        </Link>
      </div>
    </div>
  );
}