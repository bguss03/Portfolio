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
  const [modalData, setModalData] = useState<ProjectData | null>(null);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const handleOpen = (projectData: ProjectData) => {
    setModalData(projectData);
    const modal = document.getElementById('projectModal') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  const handleClose = () => {
    setIsClosing(true); 

    setTimeout(() => {
      const modal = document.getElementById('projectModal') as HTMLDialogElement;
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
        <h1 className="text-4xl italic font-bold">Projects</h1>
      </div>
       <div className="project-box px-4 md:px-16 lg:px-15 xl:px-60 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsOnPage.map((project, index) => (
          <div
            className=" border border-[#EEE6CA] dark:border-zinc-700 hover:shadow-md shadow-black delay-100 rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer"
            key={project.id}
            onClick={() => handleOpen(project)}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h1 className="text-2xl font-bold my-2">{project.name}</h1>
              <p className="text-base/loose mb-4 opacity-70 flex-grow">{project.ket}</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <p key={index} className="py-1 px-2 border border-zinc-500 rounded-lg font-semibold text-sm hover:bg-[#eaf0d6] dark:hover:bg-zinc-700">
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <dialog 
        id="projectModal" 
        className={`modal modal-middle sm:modal-middle ${isClosing ? 'modal-closing' : ''}`}
        onCancel={(e) => { e.preventDefault(); handleClose(); }}
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

       <div className="py-10" data-aos="fade-up" data-aos-delay={200}>
        <Link to="/project">
            <button className="w-40 h-13 bg-[#1B56FD] hover:bg-[#134deb] text-white p-3 rounded-2xl italic text-center font-bold">More Projects</button>
        </Link>
      </div>
    </div>
  );
}