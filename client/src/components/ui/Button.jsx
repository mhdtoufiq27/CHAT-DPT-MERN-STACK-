const Button = ({ text }) => {
  return (
    <button className="px-7 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all duration-300 font-semibold">
      {text}
    </button>
  );
};

export default Button;