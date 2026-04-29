const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
       className="
        bg-blue-600 text-white 
        hover:bg-blue-700 
        dark:bg-blue-500 dark:text-white 
        dark:hover:bg-blue-600
        transition px-6 py-3 rounded-lg font-medium
      "
    >
      {children}
    </button>
  );
};

export default Button;