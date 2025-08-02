import { Project } from "../../data";

export default function Projek() {
  return (
    <div className="text-center mt-10 py-10" data-aos="fade-up">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold italic">Project</h1>
      </div>
      <div>
        <p className="text-base/loose opacity-50 px-4">Here are some projects I have worked on</p>
      </div>
      <div className="project-box px-4 md:px-16 lg:px-60 mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        {Project.map((projects, index) => (
          <div
            className="border border-zinc-700 rounded-3xl overflow-hidden flex flex-col h-full"
            key={projects.id}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="w-full aspect-video overflow-hidden">
              <img
                src={projects.image}
                alt={projects.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h1 className="text-2xl font-bold my-2">{projects.name}</h1>
              <p className="text-base/loose mb-4 opacity-70 flex-grow">{projects.ket}</p>
              <div className="flex flex-wrap gap-2">
                {projects.tools.map((tool, index) => (
                  <p key={index} className="py-1 px-3 border border-zinc-500 rounded-lg font-semibold text-sm hover:bg-zinc-700">
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}