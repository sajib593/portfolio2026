const Card = ({ title, description, tech, github, live }) => {
  return (
    <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col gap-4">

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="text-gray-600">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span
            key={i}
            className="text-sm bg-gray-100 px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-2">
        <a href={live} target="_blank" className="text-blue-600 text-sm">
          Live
        </a>
        <a href={github} target="_blank" className="text-blue-600 text-sm">
          GitHub
        </a>
      </div>

    </div>
  );
};

export default Card;