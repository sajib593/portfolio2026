const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg font-medium"
    >
      {children}
    </button>
  );
};

export default Button;