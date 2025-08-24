import { listSkill, Tools } from '../../data';

export default function Toolss() {
  return (
    <div className="py-10"> 
      <div className="p-6 text-center" data-aos="fade-up">
        <h1 className="text-4xl italic font-bold">Programming Languages & Tools</h1>
      </div>
      
      <div className="grid grid-cols-2 px-3 sm:flex justify-center mt-10 gap-6 max-w-4xl mx-auto">
        {Tools.map((tool) => (
          <div
            className="flex items-center gap-3 p-2 sm:w-50 border border-[#EEE6CA] dark:border-zinc-700 rounded-md hover:bg-[#eaf0d6] dark:hover:bg-zinc-700"
            key={tool.id}
            data-aos="fade-up"
          >
            <img src={tool.image} alt={tool.name} className="w-14 p-1" />
            <div>
              <h4 className='italic font-bold'>{tool.name}</h4>
              <p className="text-sm text-zinc-400 opacity-60 hidden">{tool.ket}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 w-full max-w-4xl mx-auto px-3">
        {listSkill.map((skill, index) => (
          <div
            className="flex items-center gap-3 p-2 border border-[#EEE6CA] dark:border-zinc-700 rounded-md hover:bg-[#eaf0d6] dark:hover:bg-zinc-700"
            key={skill.id}
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <img src={skill.image} alt={skill.name} className="w-14 p-1" />
            <div>
              <h4 className='italic font-bold'>{skill.name}</h4>
              <p className="text-sm text-zinc-400 opacity-60 hidden">{skill.ket}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}