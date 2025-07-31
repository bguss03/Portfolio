import { listSkill, Tools } from '../../data';

// Nama komponen lebih baik "Tools" atau "SkillsSection"
export default function ToolsSection() {
  return (
    <div className="py-10"> 
      <div className="p-6 text-center" data-aos="fade-up">
        <h1 className="text-6xl italic font-bold">Tools</h1>
      </div>
      
      <div className="flex justify-center mt-10 gap-6 px-4 max-w-4xl mx-auto">
        {Tools.map((tool) => (
          <div
            className="flex items-center gap-3 p-3 border border-zinc-700 rounded-md hover:bg-zinc-700"
            key={tool.id}
            data-aos="fade-up"
          >
            <img src={tool.image} alt={tool.name} className="w-14 p-1" />
            <div>
              <h4 className='italic font-bold'>{tool.name}</h4>
              <p className="text-sm text-zinc-400 opacity-60">{tool.ket}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 w-full max-w-4xl mx-auto ">
        {listSkill.map((skill, index) => (
          <div
            className="flex items-center gap-3 p-3 border border-zinc-700 rounded-md hover:bg-zinc-700"
            key={skill.id}
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <img src={skill.image} alt={skill.name} className="w-14 p-1" />
            <div>
              <h4 className='italic font-bold'>{skill.name}</h4>
              <p className="text-sm text-zinc-400 opacity-60">{skill.ket}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}