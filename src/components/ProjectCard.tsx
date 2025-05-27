interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  mockupType: 'mobile' | 'desktop';
  image: string;
}

const ProjectCard = ({ title, description, category, mockupType, image }: ProjectCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 mb-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
        <div className={mockupType === 'mobile' ? "relative mx-auto w-48 h-96 flex items-center justify-center" : "relative mx-auto w-full max-w-md flex items-center justify-center"}>
          <img src={image} alt={title} className={mockupType === 'mobile' ? "max-h-full max-w-full rounded-[1.5rem] object-contain" : "max-h-48 w-full rounded object-contain"} />
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-xl font-outfit font-semibold text-dark-blue mb-2">
          {title}
        </h3>
        <p className="text-muted-blue font-inter text-sm mb-3 leading-relaxed">
          {description}
        </p>
        <span className="inline-block text-xs font-inter font-medium text-dark-blue/70 bg-dark-blue/10 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
