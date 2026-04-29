const Card = ({ title, description, tech, github, live }) => {
  return (
    <div
      className="
        border rounded-xl p-6 shadow-sm 
        hover:shadow-md transition 
        flex flex-col gap-4
        bg-white text-gray-900
        dark:bg-gray-800 dark:text-white
      "
    >
      {/* Title */}
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span
            key={i}
            className="
              text-sm 
              bg-gray-200 text-gray-800 
              dark:bg-gray-700 dark:text-white 
              px-2 py-1 rounded
            "
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-2">
        <a
          href={live}
          target="_blank"
          className="text-blue-600 dark:text-blue-400 text-sm"
        >
          Live
        </a>

        <a
          href={github}
          target="_blank"
          className="text-blue-600 dark:text-blue-400 text-sm"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Card;