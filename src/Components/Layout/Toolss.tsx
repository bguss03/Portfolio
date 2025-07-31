import { listSkill, Tools } from '../../data';

export default function Toolss() {
  return (
    <div>
      <div className="p-6 mt-32 sm:mt-10" data-aos="fade-up">
        <h1 className="text-6xl text-center italic font-bold">Tools yang Dipakai</h1>
      </div>
      
      <div className="flex justify-center m-2 sm:m-10">
        {Tools.map((tool) => (
          <div
            className="flex items-center gap-3 p-2 w-full md:w-1/4 border border-zinc-700 rounded-md hover:bg-zinc-700 hover:animate-ping"
            key={tool.id}
            data-aos="fade-up"
          >
            <img src={tool.image} alt={tool.name} className="w-14 p-1" />
            <div>
              <h4 className='italic font-bold'>{tool.name}</h4>
              <p className="text-sm text-zinc-400">{tool.ket}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 m-2 sm:m-10">
        {listSkill.map((skill, index) => (
          <div
            className="flex items-center gap-3 p-2 border border-zinc-700 rounded-md hover:bg-zinc-700"
            key={skill.id}
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <img src={skill.image} alt={skill.name} className="w-14 p-1" />
            <div>
              <h4 className='italic font-bold'>{skill.name}</h4>
              <p className="text-sm text-zinc-400">{skill.ket}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}