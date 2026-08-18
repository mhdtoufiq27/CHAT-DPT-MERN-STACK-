const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 duration-300">
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;