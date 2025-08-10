import { Project } from "../../data";
import { Link } from "react-router-dom";

export default function Projek() {

  return (
    <div className="text-center py-10" data-aos="fade-up">
      <div className="">
        <h1 className="text-4xl md:text-4xl font-bold italic">Projects</h1>
      </div>
      <div className="project-box px-4 md:px-16 lg:px-60 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {Project.map((projects, index) => (
          <div
            className="border border-zinc-700 rounded-3xl overflow-hidden flex flex-col h-full"
            key={projects.id}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="w-full overflow-hidden">
              <img
                src={projects.image}
                alt={projects.name}
                className="w-full h-50 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h1 className="text-2xl font-bold my-2">{projects.name}</h1>
              <p className="text-base/loose mb-4 opacity-70 flex-grow">{projects.ket}</p>
              <div className="flex flex-wrap gap-2">
                {projects.tools.map((tool, index) => (
                  <p key={index} className="py-1 px-2 border border-zinc-500 rounded-lg font-semibold text-sm hover:bg-zinc-700">
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="py-10" data-aos="fade-up" data-aos-delay={200}>
        <Link to="/project">
            <button className="w-40 h-13 bg-[#77BEF0] hover:bg-[#113F67] p-3 rounded-2xl italic text-center font-bold">More Projects</button>
        </Link>
        </div>
    </div>
  );
}