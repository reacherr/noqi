
interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="text-center lg:text-left">
      <div className="w-16 h-16 mx-auto lg:mx-0 mb-6 bg-soft-beige/20 rounded-lg flex items-center justify-center">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-outfit font-semibold text-soft-beige mb-4">
        {title}
      </h3>
      <p className="text-light-beige/80 font-inter leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
